#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsCdkCrudStack } from '../lib/aws-cdk-crud-stack';

const app = new cdk.App();
new AwsCdkCrudStack(app, 'AwsCdkCrudStack');
