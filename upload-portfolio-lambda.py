import boto3
#from botocore.client import Config
import io
import zipfile
import mimetypes

def lambda_handler(event, context):

    sns=boto3.resource('sns')
    topic=sns.Topic('arn:aws:sns:us-east-1:476314331207:deployPortfolioTopic')

    try:
        s3 = boto3.resource('s3')
        portfolio_bucket =s3.Bucket('portfoilio.ahmadalmanassra.info')
        build_bucket=s3.Bucket('portfoliobuild.ahmadalmanassra.info')

        #try StringIO first, if not try BytesIO
        portfolio_zip=io.BytesIO()
        build_bucket.download_fileobj('myPortfolio.zip',portfolio_zip)


        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj =myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj,nm,
                  ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
        print("Job done!")
        topic.publish(Subject="Portfolio Deployed",Message="Portfolio deployed successfully!")
    except:
        topic.publish(Subject="Portfolio Deployed Failed", Message="The portfolio was not deployed successfully!")
    return 'Hello from Lambda'
