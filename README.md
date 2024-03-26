Following steps

Step 1. Clone this repo
Step 2. Go to https://app.hygraph.com/ and create an account
Step 3. Clone sample DB https://app.hygraph.com/clone/990b168deb1a490e97ab972b40b6feef?name=BlogCMS
Step 4. create `.env` file in local and add
```
ESLINT_NO_DEV_ERRORS=true
NEXT_PUBLIC_GRAPHCMS_ENDPOINT=
GRAPHCMS_TOKEN=
```
Step 5: go to https://app.hygraph.com/ -> Project settings -> API Access -> Endpoints
`NEXT_PUBLIC_GRAPHCMS_ENDPOINT` assign as Content API
Scroll down to Permanent Auth Tokens, create new tokens and add to `GRAPHCMS_TOKEN`

Run project. Done!
