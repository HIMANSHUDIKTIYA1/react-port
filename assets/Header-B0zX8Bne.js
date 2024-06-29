import{G as c,r as n,j as e,L as s}from"./index-7fs2zHDP.js";function r(t){return c({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"},child:[]}]})(t)}function i(t){return c({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"},child:[]}]})(t)}const x=()=>{const[t,l]=n.useState(!1),a=()=>{l(!t)};return e.jsx(e.Fragment,{children:e.jsx("nav",{className:"navbar   z-[10000]",children:e.jsx("div",{className:" max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex items-center justify-between h-16",children:[e.jsx("div",{className:"flex items-center",children:e.jsx("div",{className:"flex-shrink-0 ",children:e.jsxs(s,{to:"",className:"port text-white font-bold text-[30px]",children:[" Port",e.jsx("span",{className:" text-yellow-300",children:" Folio"})]})})}),e.jsx("div",{className:" md:block ",children:e.jsxs("div",{className:`navbar-menu ${t?"active":""}`,children:[e.jsx(s,{to:"/",onClick:a,className:" text-gray-600 px-[35px] font-bold text-[20px]  hover:text-gray-300",children:"HOME"}),e.jsx(s,{to:"/About",onClick:a,className:" text-gray-600 px-[35px] font-bold text-[20px] hover:text-gray-300",children:"ABOUT"}),e.jsx(s,{to:"/Project",onClick:a,className:" text-gray-600 px-[35px] font-bold text-[20px] hover:text-gray-300",children:"PROJECT"}),e.jsx(s,{to:"/Contact",onClick:a,className:" text-gray-600 px-[35px] font-bold text-[20px] hover:text-gray-300",children:"CONTACT"}),e.jsx("style",{jsx:!0,children:`
       
      
        .navbar-icon {
          font-size: 1.5rem;
          cursor: pointer;
          display: none;
        }
        @media screen and (max-width:800px) {
          
          .navbar-menu {
            padding:20px;
            flex-direction: column;
            position: absolute;
             top: 60px; 
            left: 0;
            width: 100%;
           
           
          
            
          }
          .navbar-menu.active {
            
            background: rgba(223, 217, 217, 0.057);
            backdrop-filter: blur(10px);
            position: fixed;
            
            
 }
         
          .navbar-icon {
            display: block;
            padding-right:100px;
          }
        }
        `})]})}),e.jsx("div",{className:"navbar-icon",onClick:a,children:t?e.jsx(i,{}):e.jsx(r,{})})]})})})})};export{x as default};
