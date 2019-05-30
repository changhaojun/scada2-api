
# 揽月工厂2.0 api端`by Changhaojun`
### 框架基本信息
    egg
        
### 本地启动开发调试
1.  拉取代码（注意为dev分支），执行npm install
2.  安装完依赖后执行npm run dev启动服务

### 数据库配置
1.  地址：项目根目录config/config.default.js中查看
2.  插件：egg-mongoose

### 主要功能:

####  提供给finfosoft-scada2-web接口列表  

##### 1.  app/login
1.  method: POST
2.  参数：username、password
3.  描述：登录接口

##### 2.  app/scada
1.  method: GET
2.  参数：app_id、page_size、page_number (没有分页时page_size,page_number不传)
2.  描述：用于获取当前应用下的组态列表

##### 3.  app/scada/:scadaId
1.  method: GET
2.  参数：
2.  描述：获取组态数据

##### 4.  app/scada
1.  method: POST
2.  参数：app_id
3.  描述：新增组态

##### 5.  app/scada/:scadaId
1.  method: PUT
2.  参数：data.js文件结构
3.  描述：更新组态信息

##### 6.  app/scada/:scadaId
1.  method: DELETE
2.  参数：
3.  描述：删除组态



