
#### TCP/IP
协议:一种规则,规定不同计算机操作系统,硬件之间怎么通信的一种规则
像这样把互联网相关联的协议集合起来总称为TCP/IP协议.
##### TCP/IP分层管理
按照组层次分为以下四层:
- 应用层:决定了向用户提供应用服务时通信的活动
  - tcp/ip协议族内渔村了各类通用应用服务比如FTP和DNS等
- 传输层:对上层应用层,提供处于网络连接中两台计算机之间的数据传输.
  - 在传输层有两个性质不同的协议:TCP和UDP
- 网络层:又名网络互联层有,用来处理网络上流动的数据包
  - 数据包使网络传输的最小数据单位.该层规定了通过怎样的路径(传输路线到达对方计算机),并把数据包传给对方.
  - 与对方计算机之间通过多台计算机或者网络设备进行传输时,网络层所起的作用就是在众多的选项内选择一条传输路线
- 数据链路层:又称链路层,数据接口层,用来处理链接玩罗德硬件部分,包括操作系统,赢家的驱动,NIC,及光纤等物理可见部分.硬件范畴均在链路层作用范围内.

分层好处:使设计更加简单,给每个层分配不同的任务

##### 通信传输流
客户端 <--->  应用层(HTTP客户端)① <---> 传输层(TCP)② <---> 网络层(IP)③ <---> 链路层(网络)④ <---> 链路层(网络)④ <---> 网络层(IP) <---> 传输层(TCP) <--->  应用层(HTTP服务器端) <---> 服务端
- ①:http协议发送请求
- ②:tcp协议对在应用层收到的数据(http请求报文)进行分割,并在各个报文上打上标记序号及端口号 发送给网络层
- ③:增加作为通信目的地的MAC地址后转发给链路层
- ④:接受端的服务器在链路层收到服务端发送的数据,按顺序往上发送一直到应用层,才算真正接收端由客户端发送过来的http请求

在http数据从应用层发出后,之后的每一层都会对其进行封装,在传输层进行TCP首部的封装,在网络层进行IP首部的封装,在数据链路层进行以太网首部封装,在服务端的数据链路层接收到数据后会将这些封装一一消去.

#### IP,TCP和DNS
IP网际协议位于网络层,作用是通过ip地址和mac地址将各种数据包传给对方,其中ip地址指明了节点被分配到的地址,mac地址是指网卡所属的固定地址,ip地址可以和mac地址进行配对,ip地址可换但是mac地址基本上不会更改.
TCP:tcp协议位于传输层,提供可靠的字节流服务(所谓字节流服务是为了方便传输,将大数据块分割成以报文段为单位的数据包进行管理,将报文段传递给对方),为了将数据准确无误的送达,TCP协议采用了三次握手策略(发送端将标有SYN的数据包发送给服务端,服务端接收到数据包后发送标有SYN/ACK的数据包给发送端,发送端接收到数据包后发送带有SYN的数据包.SYN-synchronize,ACK-acknowledgement)
DNS服务是和HTTP协议一样位于应用层,提供域名到ip地址之间的解析.使由数字组成的ip地址可以用有含义的字母单词来表示,而DNS做的就是将这些容易理解的字母单词解析为ip地址

##### 各协议与HTTP协议之间关系
以访问https:www.plumli.xyz/为例:
客户端通过DNS解析获得https:www.plumli.xyz/所对应的IP地址--->HTTP协议生成针对目标web服务器的HTTP请求报文--->TCP为了方便通信将报文分割成报文段,把每个报文段可靠的传输给对方--->根据ip地址在路由器中进行中转--->客户端接收到报文段,根据TCP协议对报文段进行重组,并对请求内容进行处理--->最后将处理过的内容通过TCP/IP协议向用户进行回转.
#### URI和URL
URI:统一资源标识符,用字符串标识某一互联网资源
URI格式:`http://user:pass@www.example.com:80/dir/index.html?uid=1#ch1`
- http:协议方案名
- user:pass登录信息认证(可选)
- www.example.com:服务器地址
- 80:服务器端口
- dir/index.html:文件路径
- uid=1查询字符串
- ch1片段标识符
URL:统一资源定位符,表示资源在互联网上所处的位置