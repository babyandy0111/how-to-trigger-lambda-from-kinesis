#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { HowToTriggerLambdaFromKinesisStack } from '../lib/how-to-trigger-lambda-from-kinesis-stack';

const app = new cdk.App();
new HowToTriggerLambdaFromKinesisStack(app, 'HowToTriggerLambdaFromKinesisStack', {
  env: {
    account: process.env.AWS_ACCOUNT_ID,
    region: process.env.AWS_REGION
  },
});
