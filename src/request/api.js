/** 
 * api接口统一管理
 */
import { get, post, put, axiosDelete} from './http'
//注册
export const Register = p => post('/user/register', p);
//登录
export const Login = p => post('/user/login', p);
//登出
export const Logout = p => post('/user/logout', p);
//判断用户是否存在by userid
export const IsExistid = p => get('/user/id/{userName}', p);
//判断用户是否存在by username
export const IsExistName = p => get('/user/id/{userName}', p);
//忘记密码接口
export const ForgetPsw = p => post('/user/password/{phone}', p);
//更新用户信息接口
export const ChangeInfo = p => post('/user/user', p);
//修改密码接口


export const ChangePsw = p => post('/user/password', p);
//申请成为开发者
export const ToBeDeveloper = p => post('/developer', p);
//更新开发者信息
export const UpdateDeveloper = p => put('/developer', p);
//获取开发者信息
export const GetDeveloper = p => get('/developer', p);


//传参未明确，感觉可能不能用，待测试
//图片验证码
export const ImgCode = p => get('/verify/img/code', p);
//发送短信验证码
export const SmsCode = p => get('/verify/sms/code', p);
//验证图片验证码获取短信验证码接口
export const TestCode = p => post('/verify/img/code', p);


//获取服务列表接口
export const GetServiceForm = p => get('services?page=&pageSize=', p);
//获取服务调用API接口
export const GetServiceUsed = p => get('services/apis/detail/', p);
//批量获取服务调用API接口（待定）


export const GetServiceUsedAll = p => get('services/apis/detail', p);
//新增应用接口
export const AppendApp = p => post('/application', p);
//获取用户应用列表接口
export const GetAppAll = p => get('/applications', p);
//删除应用接口
export const DeleteApp = p => axiosDelete('/applications/{appId}', p);
//更新应用接口
export const UpdateApp = p => put('/applications', p);
//应用添加服务接口
export const AddService = p => post('/applications/services', p);
//应用更新服务接口
export const UpdateService = p => put('/applications/service', p);
//获取应用服务接口
export const GetService = p => get('/applications/services?appId=&page=&pageSize=', p);
//删除应用服务接口
export const DeleteService = p => axiosDelete('/applications/services', p);


//获取视频列表接口
export const GetVideo = p => get('/videos?page=&pageSize=', p);


//获取资源列表接口
export const GetResources = p => get('/resources?keyword=&resType=&page=&pageSize=', p);
//下载资源接口
export const DownloadResource = p => get('/resources/{resourceId}', p);


//上传图片接口
export const UploadImg = p => post('/common/img', p);
//获取banner列表接口
export const GetBanner = p => get('/common/banners', p);
//获取图片接口
export const GetImg = p => get('/common/{imgPath}', p);


//新增建议接口
export const AddAdvice = p => post('/Advice', p);
//获取新增建议接口
export const GetAddAdvice = p => get('/Advice', p);


//生成SM2密匙对接口
export const BirthSM2 = p => get('/SM2key', p);
//读取文本接口
export const ReadWord = p => post('/SM2key/key', p);
//验证SM2密匙是否匹配接口
export const TestSM2 = p => post('/SM2key/match', p);
//根据私匙生成公匙接口
export const BirthPublicKey = p => post('/SM2key/publicKey', p);
//签名接口
export const Sign = p => post('/SM2key/sign', p);
//验签接口  注：此处未给出请求方式，我估计是post
export const TestSign = p => post('/SM2key/sign/verification', p);


//查找功能接口
export const Search = p => get('/search', p);
