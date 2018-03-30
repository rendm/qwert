#717
1.使用webpack进行程序打包 ：入口(entry)、输出(output)、loader、插件
---将node里process.env.NODE_ENV的返回值来判断命令是idev还是build
---entry:{//定义入口文件
        "bundle":dir+"/src/main.js"//__dirname:找的是绝对路径；
    },
    output:{//输出文件
        "filename":"sdist.js",//输出的js文件名字，，
        "path":dir+"/dist"//输出js文件的所在路径
    },
    module:{//需要打包的module
        rules:[]
    }
2.搭建路由页面：(仿照vue搭建,提升路由开发效率)
3.页面布局主要使用flex，，
---首页中运用了swiper 插件进行轮播-懒加载是根据滚动条的高度来进行刷新lazyloader数据-
--login页面将注册的信息存在token字段中,然后再将token里面存的信息放进.json,为验证登录时输的信息
4.购物车--redux管理数据
            由数据驱动视图开发者不需要手动的去修改dom,页面代码组织会越来难以维护,使得页面代码的出错概率高，页面的视图展示会融合在js代码中，对于页面视图显示的升级也不友好。
----主要技术.技术:  react,  react-dom,  redux,  react-redux, react-router,  
    后台:node模拟搭建，
    数据请求：  fetch请求
#页面
页面
首页
分类列表页
搜索页
洋情页
分类页
购物车
我的
登录
注册
邮寄地址管理
添加
邮寄地址列表
订单管理页
#项目流程
产品经理给出项目需求(也有可能是客户的要求)--需求说明会d分工)
  由产品经理或者UE出产品原型
  由UI设计根据原型出设计图1后端开始搭建数据库，开发接口
  前端开始实现页面布局，功能
  前端和后端进行联调，调试接口是否正常，前端页面是否正常
  测试人员介入进行黑盒或者白盒测试，提bug
  开发人员解决bug.打包上线
  产品完成
