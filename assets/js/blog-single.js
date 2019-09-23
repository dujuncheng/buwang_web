let url = 'http://127.0.0.1:84/notebook?method=get_blog'


let urlParse = function(url) {
	let obj = {}
	let reg = /[?&][^?&]+=[^?&]+/g
	let arr = url.match(reg)
	// ['?id=12345','&a=b']
	if (arr) {
		arr.forEach((item) => {
			let tempArr = item.substr(1).split('=')
			let key = decodeURIComponent(tempArr[0])
			let val = decodeURIComponent(tempArr[1])
			obj[key] = val
		})
	}
	return obj
}

let vm = new Vue({
	el: '#app',
	data() {
		return {
			dudu: 'dddd',
			note_id: '',
			urlObj: {},
			userInfo: {},
			contentInfo: {
			
			},
		}
	},
	created() {
		this.getNoteId();
		this.requestBlog();
	},
	methods: {
		getNoteId() {
			this.urlObj = urlParse(window.location.search);
			if (this.urlObj && this.urlObj.note_id) {
				this.note_id = this.urlObj.note_id;
			}
		},
		requestBlog() {
			let that = this;
			if (!that.note_id) {
				alert('该链接已失效')
				return;
			}
			$.ajax({
				url: `${url}`,
				type: 'POST',
				data: {
					note_id: that.note_id
				},
				success:function(result){
					if (result.success && result.data) {
						that.handleContent(result.data.content);
						that.handleUser(result.data.user_info);
					}
				}
			});
		},
		handleContent(obj) {
			if (obj) {
				let content = Base64.decode(obj.content);
				var contentHTML = window.markdownit().render(content);
				console.log(contentHTML)
				this.contentInfo = {
					contentHTML: contentHTML,
					title: obj.title,
				}
			}
		},
		handleUser(obj) {
			if (obj) {
				this.userInfo = obj
			}
		}
	}
})

console.log(vm)
