import axios from 'axios'
import baseURL from './baseUrl'
// import { getLocal } from '../utils'

//创建axios实例
const service = axios.create({
    baseURL: baseURL, // api的base_url
    timeout: 200000, // 请求超时时间
    withCredentials: true // 选项表明了是否是跨域请求
})

service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


service.interceptors.request.use(config => {
    // 请求头添加token
    // if (getLocal('authed')) {
    //     config.headers.Authorization = `Bearer ${getLocal('authed')}`
    // }
    // const flag = (config.data && config.data.loading !==false) || (config.params && config.params.loading !== false)
    // if(flag){
    //     let loading
    //     loading = document.getElementById('ajaxLoading')
    //     loading.style.display = 'block'
    // }
    return config;
}, err => {
    console.log('请求失败')
    return Promise.reject(err)
})


// respone拦截器
service.interceptors.response.use(
    res => {
        return res.status === 200 ? Promise.resolve(res.data) : Promise.reject(res.data)
    },
    error => {
        const { status } = error.response
        switch (status) {
            case 401:
              break;
            default:
              break;
        }
        return Promise.reject(error)
    }
)
export default service
