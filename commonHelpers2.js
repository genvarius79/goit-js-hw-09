import"./assets/styles-17614758.js";const r="feedback-form-state",l=document.querySelector(".feedback-form");function o(e){const t=e.message.value.trim();return{email:e.email.value.trim(),message:t}}l.addEventListener("input",e=>{const t=o(e.currentTarget),s=JSON.stringify(t);localStorage.setItem(r,s)});function a(){const e=localStorage.getItem(r);return JSON.parse(e)}a()!==null&&(l.email.value=a().email,l.message.value=a().message);l.addEventListener("submit",e=>{e.preventDefault();const t=e.target.elements.email.value,s=e.target.elements.message.value;if(t===""||s==="")return alert("All form fields must be filled in");a()!==null&&console.log(a()),localStorage.removeItem(r),l.reset()});
//# sourceMappingURL=commonHelpers2.js.map
