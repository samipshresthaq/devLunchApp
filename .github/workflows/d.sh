#!/bin/bash

  set -ex

  API_KEY='da4d1d30e2f2ae7f'
  INTEGRATIONS_API_URL='https://3000-qualitiai-qualitiapi-mc66xlppvyc.ws-us47.gitpod.io'
  PROJECT_ID='3'
  CLIENT_ID='f194ac264047511e67e1f485cc190f7e'
  SCOPES=['"ViewTestResults"','"ViewAutomationHistory"']
  API_URL='https://api.qualiti-dev.com/public/api'
  INTEGRATION_JWT_TOKEN='eeff28890b41c1a025024c0127e8bae8a8d9e8df5dd216b84b61bc1384fb409f92fcc2fe02143eb133362de7c483fef759d72d6fdb49ea32c5e646a3611ba9a0d98ceec54ebaaa25dc7abeda59321bc3a65f82b1a721e230dd1ce1058c7e46604a6cd2fdc18e12266e07fa3fc351fade7701c9138428cc22adc0457bdc795d01121850c879a416700a32aed778f09e8203a43c97f5417b8af1e6db3711b43bda8824e6bf4b1d8c400f5824ad58cb20e65337ab7018d0002cc72f591fb7bffd617dbdae0a4fb44dfa051d886ca01ac4b364172745c2025908dbdd22cf7979ba98590a30d8e068ce92cea2a185725f81b2938aca4266d18e398090c6944a6df57bd268d152201e7f3b94e75763dc14da6a|2d89131384751b4f102a5d8d7701a35c|6e51a0e08344d2cef6ecd6073b04e100'

  apt-get update -y
  apt-get install -y jq

  #Trigger test run
  TEST_RUN_ID="$( \
    curl -X POST -G ${INTEGRATIONS_API_URL}/integrations/gitlab/${PROJECT_ID}/events \
      -d 'token='$INTEGRATION_JWT_TOKEN''\
      -d 'triggerType=Deploy'\
    | jq -r '.test_run_id')"

  AUTHORIZATION_TOKEN="$( \
    curl -X POST -G ${API_URL}/auth/token \
    -H 'x-api-key: '${API_KEY}'' \
    -H 'client_id: '${CLIENT_ID}'' \
    -H 'scopes: '${SCOPES}'' \
    | jq -r '.token')"

  # Wait until the test run has finished
  TOTAL_ITERATION=200
  I=1
  while : ; do
     RESULT="$( \
     curl -X GET ${API_URL}/automation-history?project_id=${PROJECT_ID}\&test_run_id=${TEST_RUN_ID} \
     -H 'token: Bearer '$AUTHORIZATION_TOKEN'' \
     -H 'x-api-key: '${API_KEY}'' \
    | jq -r '.[0].finished')"
    if [ "$RESULT" != null ]; then
      break;
    if [ "$I" -ge "$TOTAL_ITERATION" ]; then
      echo "Exit qualiti execution for taking too long time.";
      exit 1;
    fi
    fi
      sleep 15;
  done

  # # Once finished, verify the test result is created and that its passed
  TEST_RUN_RESULT="$( \
    curl -X GET ${API_URL}/test-results?test_run_id=${TEST_RUN_ID}\&project_id=${PROJECT_ID} \
      -H 'token: Bearer '$AUTHORIZATION_TOKEN'' \
      -H 'x-api-key: '${API_KEY}'' \
    | jq -r '.[0].status' \
  )"
  echo "Qualiti E2E Tests ${TEST_RUN_RESULT}"
  if [ "$TEST_RUN_RESULT" = "Passed" ]; then
    exit 0;
  fi
  exit 1;
  
