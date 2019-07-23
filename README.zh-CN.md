
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

#### 提供给finfosoft-scada2-web接口列表  

##### 1.  app/login
1.  method: POST
2.  参数：username、password
3.  描述：登录接口

##### 2.  app/template
1.  method: GET
2.  参数：app_id、page_size、page_number (没有分页时page_size,page_number不传)
3.  描述：用于获取当前应用下的组态模板列表

##### 3.  app/template/:scadaId
1.  method: GET
2.  参数：
3.  描述：获取组态模板数据

##### 4.  app/template
1.  method: POST
2.  参数：app_id
3.  描述：新增组态模板

##### 5.  app/template/:scadaId
1.  method: PUT
2.  参数：data.js文件结构
3.  描述：更新组态模板信息

##### 6.  app/template/:scadaId
1.  method: DELETE
2.  参数：
3.  描述：删除组态模板

##### 7.  app/template/copy
1.  method: POST
2.  参数：app_id、scada_id   
3.  描述：复制组态模板

##### 8.  app/template/used/:id
1.  method: GET
2.  参数：id为app_id 或scada_id
3.  描述：获取已使用的组态模板


##### 9.  app/scada/:scadaId
1.  method: GET
2.  参数：
3.  描述：获取组态信息

##### 10.  app/scada
1.  method: POST
2.  参数：data.js文件结构
3.  描述：新增组态

##### 11.  app/scada/:scadaId
1.  method: PUT
2.  参数：data.js文件结构
3.  描述：编辑组态

##### 12.   app/model
1.  method: GET
2.  参数： 
3.  描述：获取模型列表

##### 13.   app/model
1.  method: PUT
2.  参数：model_system
3.  描述：全局修改model_system

