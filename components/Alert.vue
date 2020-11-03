<template>
   <div class="maskLayer">
        <div class="mask-content ">
            <span class="close"></span>
            <a :href="mainLink"  target="_blank" class="mask-box clearfix">
                <div class="mask-left">
                    <img src="/data/img/message.jpg" alt="DroneX Pro" class="ad">
                </div>
                <div class="mask-right">
                    <p class="offer">Limited Time Offer</p>
                    <p class="save"><span>SAVE</span><strong>50% MONEY</strong></p>
                    <p class="OEI">Offer Expires In</p>
                    
                    <div class="date-area">
                        <div class="time-box colon">
                            <span class="text">Hours</span>
                            <div class="time">
                                <span class="hours-decade">0</span>
                                <span class="hours-unit">0</span>
                            </div>
                        </div>
                        <div class="time-box colon">
                            <span class="text">Minutes</span>
                            <div class="time">
                                <span class="minutes-decade">0</span>
                                <span class="minutes-unit">0</span>
                            </div>
                        </div>
                        <div class="time-box">
                            <span class="text">Seconds</span>
                            <div class="time">
                                <span class="seconds-decade">0</span>
                                <span class="seconds-unit">0</span>
                            </div>
                        </div>
                    </div>
                    <p class="desc">30 Days Money Back Guarantee</p>
                    <a :href="mainLink" target="_blank" rel="noopener noreferrer" class="btn">Get the discount today!</a>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mainLink: 'https://hypertechx.com/ps/dronexpro/index.php?net=9785&aff={AFFID}&sid={SUBID}&cid={CLICKID}',
            timer: null,
            timer1: null,
            count: 0
        }
    },
    methods: {
        /**
         * 倒计时
         */
        countDown() {
            //结束时间
            let finishTime = new Date('2020/7/31').getTime();
            let startTime = new Date(new Date().toLocaleDateString()).getTime();
            let intervalTime = 0,
                day = 0,
                hours = 0,
                minutes = 0,
                seconds = 0;
            let that = this;
            this.timer = setInterval(function () {
                if (finishTime - new Date().getTime() <= 0) {
                     finishTime = new Date(new Date().toLocaleDateString()).getTime() + 1 * 24 * 60 * 60 * 1000;
                }
                intervalTime = finishTime - new Date().getTime();

                day =  Math.floor(intervalTime/(1000*60*60*24));
                hours = Math.floor(intervalTime / (60 * 60 * 1000) % 24) + day * 24;
                minutes = Math.floor(intervalTime / (60 * 1000) % 60);
                seconds = Math.floor(intervalTime / 1000 % 60); 
                that.renderTime(hours,minutes,seconds);
                
            },1000)
            
        },
        renderTime(hours,minutes,seconds) {
            let hoursObj = this.splitCell(hours);
            let minutesObj = this.splitCell(minutes);
            let secondsObj = this.splitCell(seconds);
            $('.hours-decade').text(hoursObj.decade);
            $('.hours-unit').text(hoursObj.unit);
            $('.minutes-decade').text(minutesObj.decade);
            $('.minutes-unit').text(minutesObj.unit);
            $('.seconds-decade').text(secondsObj.decade);
            $('.seconds-unit').text(secondsObj.unit);

        },
        splitCell(num) {
            let unit = Math.floor(num % 10);
            let decade = Math.floor(num / 10);
            return {
                unit: unit,
                decade: decade
            }
        },
        alert() {
            $('.maskLayer').css({
                display: 'block'
            })
            $('.mask-content').animate({opacity: 1,top: '50%'},400)
        },
        closeAlert() {
            $('.mask-content').animate({
                top: '40%',
                opacity: 0
            },400,function () {
                $('.maskLayer').css({
                    display: 'none'
                })
            })
            
            clearInterval(this.timer);
        }
    },
    mounted() {
        this.countDown();
        let that = this;
        this.timer1 = setTimeout(() => {
            $('body').on('mouseenter',function () {
                $('body').one('mouseleave',function () {
                    if (that.count == 0) {

                        that.alert();
                    }
                    that.count ++;
                })
            })
        },15000)
        
        $('.close').on('click',function (event) {
            event.stopPropagation();
            that.closeAlert();
        })
        $('.maskLayer').on('click',function (e) {
            e.stopPropagation();
            that.closeAlert();
        })

        
    },
    beforeDestroy() {
        $('body').off('mouseenter');
        clearInterval(this.timer);
        clearTimeout(this.timer1);
        this.timer = null;
    }
}
</script>

<style lang="scss" scoped>
.maskLayer {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(35, 35, 35, .6);
        z-index: 99;
        display: none;
        
        .mask-content {
            text-decoration: none;
            position: absolute;
            top: 25%;
            left: 50%;
            transform: translate(-50%,-50%);
            width: 590px;
            height: 320px;
            box-sizing: border-box;
            background-color: #5893FD;
            padding: 5px;

            opacity: 0;
            .close {
                position: absolute;
                right: -30px;
                top: -30px;
                width: 24px;
                height: 24px;
                cursor: pointer;
                background-image: url('../assets/image/cha.svg');
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center center;
            }
            .mask-box {
                display: block;
                .mask-left {
                    float: left;
                }
                .mask-right {
                    float: left;
                    display: flex;
                    width: 310px;
                    box-sizing: border-box;
                    flex-direction: column;
                    align-items: center;
                    .offer {
                        font-size: 28px;
                        color: #ffffff;
                    }
                    .OEI {
                        font-size: 18px;
                        color: #101010;
                    }
                    .save {
                        span {
                            font-size: 20px;
                            color: #101010;
                            margin-right: 5px;
                        }
                        strong {
                            font-size: 34px;
                            color: #ffffff;
                            letter-spacing: -1.9px;
                        }
                    }
                    .date-area {
                        display: flex;
                        width: 100%;
                        justify-content: space-between;
                        margin-top: 10px;
                        .time-box {
                            width: 90px;
                            height: 90px;
                            margin: 0 3px;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            position: relative;
                            .text {
                                font-size: 14px;
                                color: #ffffff;
                                font-weight: bold;
                            }
                            .time {
                                margin-top: 7px;
                               display: flex;
                               width: 100%;
    
                               justify-content: space-around;
                                span {
                                    display: inline-block;
                                    width: 40px;
                                    height: 60px;
                                    text-align: center;
                                    line-height: 60px;
                                    font-size: 50px;
                                    font-weight: bold;
                                    color: #535353;
                                    // margin: 0 3px;
                                    border-radius: 5px;
                                    background-color: #ffffff;
                                }
                            }
                            &.colon {
                                &::after{
                                    position: absolute;
                                    content: ':';
                                    right: -15px;
                                    bottom: 0px;
                                    color: #ffffff;
                                    font-size: 50px;
                                }
                            }
                        }
                    }
                    .desc {
                        font-size: 18px;
                        margin: 10px 0px;
                    }
                    .btn {
                        text-decoration: none;
                        display: block;
                        width: 295px;
                        height: 50px;
                        line-height: 50px;
                        text-align: center;
                        font-size: 24px;
                        font-weight: bold;
                        color: #ffffff;
                        letter-spacing: -0.9px;
                        background-color: #FF7B39;
                        box-shadow: 0px 0px 8px 5px #B3D1Ff;
                        transition: all linear 0.15s;
                        &:hover {
                            box-shadow: none;
                            background-color: rgb(255, 171,82);
    
                        }
                    }
                    
                }
            }
            
        }
    }
</style>