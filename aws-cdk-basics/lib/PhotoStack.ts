import * as cdk from 'aws-cdk-lib';
import {Bucket} from 'aws-cdk-lib/aws-s3';
import {Fn} from 'aws-cdk-lib';
import {Construct} from 'constructs';

export class PhotoStack extends cdk.Stack {
  private stackSuffix: string;
  public readonly photosBucketArn: string;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.initializeSuffix();

    const photosBucket = new Bucket(this, 'PhotoBucket3', {
      bucketName: `photo-bucket-dev-${this.stackSuffix}`,
    });

    this.photosBucketArn = photosBucket.bucketArn;

    //This method, use CfnOutput and export name in cloudformation

    // new cdk.CfnOutput(this, 'photos-bucket', {
    //   value: photosBucket.bucketArn,
    //   exportName: 'photos-bucket',
    // });
  }

  private initializeSuffix(): string {
    const shortStackId = Fn.select(2, Fn.split('/', this.stackId));
    return (this.stackSuffix = Fn.select(4, Fn.split('-', shortStackId)));
  }
}
