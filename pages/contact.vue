<template>
    <div class="contact-wrapper">
            <div class="contact_left">
                <h1 class="title">Contact Us</h1>
                <p class="subhead">We’re Here to Help</p>
                <p class="content">Have questions about our internet marketing service?
                    Let’s talk about how can we help you achieve your goals
                    And take your business to the top!</p>
            </div>
            <div class="contact_right">
                <form class="rulesForm">
                    <label for="name">
                        <p>Name</p>
                        <input type="text" v-model="info.name" class="inp" id="name">
                    </label>
                    <label for="email">
                        <p>Email</p>
                        <input type="text" v-model="info.email" class="inp" id="email">
                    </label>
                    <label for="">
                        <p>Message</p>
                        <textarea v-model="info.content" name="" id="" cols="30" rows="8" class="content talk"></textarea>
                    </label>
                    <button class="btn" @click="submitForm">SUBMIT</button>
                </form>
            </div>
        </div>
</template>

<script>
export default {
    data() {
        return {
            info: {
                name: '',
                email: '',
                content: ''
            }
        }
    },
    methods: {
        submitForm(e) {
            e.preventDefault();
            const reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
            if (!this.info.name || this.info.name.trim().length == 0) {
                window.alert('Please fill in your name!')
            } else if (!this.info.email || this.info.email.trim().length == 0) {
                window.alert('Please fill in your email address!')
            } else if (!reg.test(this.info.email.trim())) {
                window.alert('Please fill in the email correctly!')
            } else if (!this.info.content || this.info.content.trim().length == 0) {
                window.alert('Please fill in the content!')
            } else {
                this.$nuxt.$loading.start();
                this.$axios.post('https://api.vpncollection.com/admin/email',{
                    params: {
                        username: this.info.name,
                        email: this.info.email,
                        content: this.info.content
                    }
                })
                .then((res) => {

                    this.$nuxt.$loading.finish();
                    this.resetForm();
                    if (res.status == 200) {
                        
                        window.alert('Send Successfully!')
                    } else {
                        window.alert('Fail to send!');
                    }

                    
                }).catch(() => {
                    this.$nuxt.$loading.finish();
                    this.resetForm();
                    window.alert('Fail to send!');
                    
                })
            }
        },
        resetForm() {
            this.info.name = '';
            this.info.email = '';
            this.info.content = '';
        }
    }
}
</script>

<style lang="scss" scoped>
.contact-wrapper {
    width: $rootWidth;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 75px;
    padding-bottom: 100px;
    .contact_left {
        display: inline-block;
        .title {
            font-size: 40px;
            color: #1CB2C5;
        }
        .subhead {
            margin-top: 20px;
            margin-bottom: 32px;
            font-size: 20px;
            color: #0A5C7B;
        }
        .content {
            width: 400px;
            font-size: 16px;
            line-height: 25px;
        }
    }
    .contact_right {
        display: inline-block;
        padding: 45px 48px;
        background-color: #CFF1F4;
        border-radius: 10px;
        margin-left: 45px;
        .rulesForm {
            input,textarea {
                width: 370px;
                border: 1px solid #CBD5D7;
                border-radius: 5px;
                padding: 0px 8px;
                margin-top: 12px;
                margin-bottom: 18px;
            }
        }
        .inp {
            height: 38px;
            outline: none;
        }
        .content {
            resize: none;
            font-size: 16px;
            outline: none;
            box-sizing: border-box;
            
            font-family: Roboto;
        }
        .btn {
            display: block;
            outline: none;
            width: 140px;
            height: 50px;
            border: none;
            background-color: #0A5C7B;
            border-radius: 29px;
            font-size: 20px;
            font-weight: bold;
            cursor: pointer;
            color: #ffffff;
            &:hover {
                background-color: #4192A5;
            }
        }
    }
}
</style> 