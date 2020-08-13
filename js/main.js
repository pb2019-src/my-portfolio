import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': ` This Site CI/CD
    Overview`,
    'href' : "https://s3.amazonaws.com/portfoilio.ahmadalmanassra.info/serverless-portfolio-architecture.png",
    'desc': "Taking advantage of the CI/CD frame work supported by continual integration with constant development and continuous deployment. This portfolio makes use of AWS CodePipeline, CodeDeploy, CloudFormation, Lambda,SNS,S3, and a few other services that form a backbone for a CI/CD workflow.  A public github repository is the source control which triggers a webhook when pushed to the master branch which triggers AWS build through Code Pipeline.NPM with Webpack is used to build the bundle along with Bable’s loader, React components , and hest for testing ensuring an intergrated development testing while in porduction workflow. Artifacts get deposited in a statistically hosted S3 bucket (deployed using a serverless python script in Lambda. DNS resolution is provided through route53 with a AWS hosted zone, deplying to edge locations globally using CloudFormation.",
    'image': {
      'desc': "screenshot of archtiecture map",
      'src': "images/example4.png",
      'comment': ""
    }
  },
  {
    'title': `Software Development
    /Cloud`,
    'href' : "https://github.com/ahmad-acloud",
    'desc': `

AWS/Cloud Computing ,
Serverless,
aws Amplify,
Docker,
SAM CLI,
Boto3,

CloudFornation,
EC2,
Lambda,
ECS,
CodeBuild/Deploy,
CodePipeline,


IAM,
PVC,
API Gateway- REST,
Amazon Cognito,
Rout 53,
Cloudfront,
Cloudwatch/Logs,

DyanamoDB,
SQL/RDS,
S3,
SQS,
SNS,
Kinesis,

Python/Pipenv,pip3,
Node.js/ NPM,
Git/Github,


Javascript,
React,
Webpack,
Babel,
Mocha/Chai,
Jest/Enzyme,

JAVA,
JDBC,
Servlets,
MVC,
Maven,
JSP,
Tomcat,
Web Services,
Bootstrap,
JSP,
MySQL,
    `,

    'image': {
      'desc': "screenshot of aws",
      'src': "images/example1.png",
      'comment': ""
    }
  },
  {
  'title': "  Business Analytics & Data Science",
  'href' : "https://github.com/ahmad-acloud",
  'desc': `SQL
  Microsoft Excel,
  Critical Thinking,
  Python/Matlab-Statistical Methods Programming,
  Data Visualization,
  Presentation Skills,
  Machine/Deep Learning,

  Modules (Python) :
  - Pandas,
  - NumPy,
  - Matplotlib,
  - TensorFlow,
  - Ploty,
  Tools (Matlab) :
  -  Statistics and Machine Learning Toolbox,
  -  Curve Fitting Toolbox,
  -  Signal Processing Toolbox,
  -  Deep Learning Toolbox,
  -  Image Processing Toolbox`,
  'image': {
    'desc': " screenshot of analytical code",
    'src': "images/example2.png",
    'comment': ""
   }
 },
 {
 'title': "Educator",
 'href' : "https://www.davisuwcscholars.org/scholars/2013/node/2867",
 'desc' : `A resilient, engaging, committed and an experienced educator in two academic institutions in the United States
and the Caribbean. Uses effective and efficient methods of teaching while attaining to the individual needs of every
student Possess experience in curriculum development and lesson planning. Areas of
    expertise include:
    Teaching/Lecturing,
    Strong Interpersonal Skills,
    IB Mathematics/Physics,
    STEM,

    Lesson Planning Expertise,
    Common Core Knowledge,
    Team Building &amp; Educational Leadership,

    Standardized Tests,
    Syllabus Development,
    Result Oriented,

    Software: Matlab, Arduino, Mathematica, Wolfalpha,
`,
 'image': {
   'desc': "screenshot of STEM",
   'src': "images/example3.png",
   'comment': ""
   }
 }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
