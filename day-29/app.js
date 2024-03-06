
const btn = document.getElementById('lgnBtn')

btn.onclick = () => {
    console.log(`Button Clicked`)
    const ipUsNm = document.getElementById('usNm')
    const ipPass = document.getElementById('pass')

    const usNm = ipUsNm.value
    const pass = ipPass.value

    console.log(`Us ${usNm}, Pass ${pass}`)

    const ctrlSts = document.getElementById('sts')
    if(usNm === 'abc' && pass === '123') {
        ctrlSts.innerText = 'Login Success'
        ctrlSts.style.color = 'green'
    } else {
        ctrlSts.innerText = 'Login Fail'
        ctrlSts.style.color = 'red'
    }
}