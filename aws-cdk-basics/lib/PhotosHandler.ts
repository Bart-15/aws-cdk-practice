import * as cdk from 'aws-cdk-lib';
import {Fn} from 'aws-cdk-lib';
import {
  Code,
  Function as LambdaFunction,
  Runtime,
} from 'aws-cdk-lib/aws-lambda';
import {Construct} from 'constructs';

interface PhotosHandlerStackProps extends cdk.StackProps {
  devPhotosBucketArn: string;
}

export class PhotosHandlerStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: PhotosHandlerStackProps) {
    super(scope, id, props);

    // const getPhotosBucket = Fn.importValue('photos-bucket');

    new LambdaFunction(this, 'PhotosHandler', {
      runtime: Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: Code.fromInline(`
        exports.handler = async (event) => {
          console.log('Hello Photo Handler, show the s3 bucket name:', process.env.PHOTOS_BUCKET)
        }
      `),
      environment: {
        PHOTOS_BUCKET: props.devPhotosBucketArn,
      },
    });
  }
}
