import * as cdk from 'aws-cdk-lib';
import {Bucket, CfnBucket} from 'aws-cdk-lib/aws-s3';
import {Construct} from 'constructs';

export class PhotoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const photoBucket = new Bucket(this, 'PhotoBucket3', {
      bucketName: 'photo-bucket-821987jj-dev',
    });

    //Overide the LogicalId
    (photoBucket.node.defaultChild as CfnBucket).overrideLogicalId(
      'PhotoBucket99jkdev'
    );
  }
}
