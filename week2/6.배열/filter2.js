const { rainbow } = require("colors")

const deptList =  [
    {deptno:10, dname:"1팀", loc:"부산"},
    {deptno:20, dname:"2팀", loc:"서울"},
    {deptno:30, dname:"3팀", loc:"대전"}
  ]

  console.log(deptList)

  deptList.push({deptno:40, dname:"4팀", loc:"이천"})

  let other = []
  //배열중에서 파라미터로 들어온 조건을 만족하는 원소만 새로운 배열에 담는다 - filter
  other = deptList.filter((rain)=> rain.deptno > 20)

  let some = []
  deptList.splice(2,1,{deptno:20, dname:"2.5팀", loc:"강릉"})
  
  //첫번째는 변경할 인덱스, 두번째는 삭제할 요소의 수

  console.log(deptList)
  console.log(other)
  console.log(some)

  