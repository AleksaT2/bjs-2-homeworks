class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    findTime(time) {
        for (let i = 0; i < this.alarmCollection.length; i++) {
            if (this.alarmCollection[i].time === time) {
                return i;
            }
        }
        return -1;
    }

    addClock(time, activity) {
        if (time == undefined || activity == undefined) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if (this.findTime(time) != -1) {
            console.warn('Уже присутствует звонок на это же время');
        }

        this.alarmCollection.push({callback: activity,
            time: time,
            canCall: true
        })
    }
    removeClock(time) {
        let indexOfTime = this.findTime(time);
        while(indexOfTime != -1) {
            this.alarmCollection.splice(indexOfTime, 1);
            indexOfTime = this.findTime(time);
        }
    }

    getCurrentFormattedTime() {
        let currentDate = new Date().toLocaleTimeString("ru", {hour: "2-digit", minute: "2-digit"});
          return currentDate;
      }

    start() {
        if (this.intervalId != null) {
          return;
        }

        let interval = setInterval(() => {
            this.alarmCollection.forEach((alarm) => checkClock(alarm));
          }, 1000);

          this.intervalId = interval;
    
        const checkClock = (alarm) => {
          if ((this.getCurrentFormattedTime() == alarm.time) && (alarm.canCall == true)) {
            alarm.canCall = false;
            return alarm.callback();
          }
        };
      }
    
    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    
    resetAllCalls() {
        this.alarmCollection.forEach((alarm) => alarm.canCall = true);
      }
    
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
      }
    
}