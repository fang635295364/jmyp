import axios from "axios";
export function request(config, success, failure) {
    const instance1 = axios.create({
        baseURL: "https://www.easy-mock.com/mock/5d2be2372abcfc5bf966fdfe/jmyp/",
        timeout: 5000
    });
    instance1(config)
        .then(function (res) {
            success(res.data);
        })
        .catch(function (err) {
            failure(err);
        });
}