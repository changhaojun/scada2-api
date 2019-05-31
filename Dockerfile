#使用nodejs
FROM finfosoft/nodejs-cnpm

#维护者信息
MAINTAINER niuzhifa "1944044667@qq.com"

ADD ff-scada2-api-test.tar /home/app/webapps/

WORKDIR /home/app/webapps/ff-scada2-api-test

RUN npm install --production

RUN npm i egg-scripts --save

EXPOSE 7001

CMD ["npm","start"]