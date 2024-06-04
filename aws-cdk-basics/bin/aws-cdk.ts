#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import {AwsCdkStack} from '../lib/aws-cdk-stack';
import {PhotoStack} from '../lib/PhotoStack';
import {PhotosHandlerStack} from './../lib/PhotosHandler';
import {BucketTagger} from './Tagger';

const app = new cdk.App({});
// new AwsCdkStack(app, 'AwsCdkStack', {
//   env: {region: 'ap-southeast-1'},
// });

const photosStack = new PhotoStack(app, 'PhotoStack', {
  env: {region: 'ap-southeast-1'},
});

new PhotosHandlerStack(app, 'PhotosHandlerStack', {
  devPhotosBucketArn: photosStack.photosBucketArn,
  env: {region: 'ap-southeast-1'},
});

const tagger = new BucketTagger('level', 'dev');
cdk.Aspects.of(app).add(tagger);
