import{d,as as m,x,L as o,b as S,c as f,at as I,I as a,l as z}from"./entry.31d8ec7d.js";const y=d({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(l){var r;const n=l;m(s=>({"85f54cb8":a(p)}));const e=x();(r=e==null?void 0:e.nuxtIcon)!=null&&r.aliases;const _=o(()=>{var s;return(((s=e==null?void 0:e.nuxtIcon)==null?void 0:s.aliases)||{})[n.name]||n.name}),p=o(()=>`url('https://api.iconify.design/${_.value.replace(":","/")}.svg')`),c=o(()=>{var t,i,u;if(!n.size&&typeof((t=e.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((i=e.nuxtIcon)!=null&&i.size))return;const s=n.size||((u=e.nuxtIcon)==null?void 0:u.size)||"1em";return String(Number(s))===s?`${s}px`:s});return(s,t)=>(S(),f("span",{style:I({width:a(c),height:a(c)})},null,4))}});const v=z(y,[["__scopeId","data-v-a58be67d"]]);export{v as default};
