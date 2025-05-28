Run below command
	-> jss setup

1. Is your Sitecore instance on this machine or accessible via network share? -> y
2. Path to the Sitecore folder (e.g. c:\inetpub\wwwroot\my.siteco.re) -> C:\inetpub\wwwroot\<Sitecore Domain Name>
3. Sitecore hostname -> <Sitecore Domain Name>
4. Sitecore API Key -> In Sitecore goto System -> Settings -> Services -> API Keys -> sckey -> Copy & Paste ItemId with {}
5. Please enter your deployment secret -> Paste ItemId without {}
6. setup is completed

7. Execute below command to run Next js code in connected mode
	-> npm run start:connected



Also one changes in Next.js code in next.config.js file 
	-> remotePatterns: [
      {
        protocol: 'https',
        hostname: 'edge*.**',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'xmc-*.**',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'feaas*.blob.core.windows.net',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'sitecorejssdemosc.dev.local', ---------> Paste your Sitecore URL here
        port: '',
      },