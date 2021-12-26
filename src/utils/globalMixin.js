export const GlobalMixin = {
	data() {
	    return {
	        isApp: false // true：代表移动端，false：代表PC端
	    }
	},
	created() {
		/** 先判断平台，pc端 or 移动端*/
        this.whichPlatform()
	},
	methods: {
        /** PC端、移动端 判断*/
        whichPlatform() {
            if(window.screen.width < 800) {
                this.isApp = true
            }else {
                this.isApp = false
            }
        }
    }
}
