#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import {AwsCdkStack} from '../lib/aws-cdk-stack';
import {PhotoStack} from '../lib/PhotoStack';

const app = new cdk.App();
// new AwsCdkStack(app, 'AwsCdkStack', {
//   env: {region: 'ap-southeast-1'},
// });

new PhotoStack(app, 'PhotoStack', {
  env: {region: 'ap-southeast-1'},
});
