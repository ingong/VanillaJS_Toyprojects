function TodoInput(props) {
  if (!(this instanceof TodoInput)) throw new Error('new 키워드를 사용해주세요.')
  const { selector, onInput } = props
  checkSelector(selector)
  this.$target = document.querySelector(selector)

  this.render = () => {
    this.$input = document.createElement('input')
    this.$input.setAttribute('type', 'text')
    this.$input.setAttribute('placeholder', '할 일을 입력하세요.')

    this.$input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        if (e.target.value.trim() === '') {
          alert('할 일을 입력해줘..')
        } else {
          // handleInput 
          onInput(e.target.value)
          // input 태그에 값 빈 문자열로 reset 
          e.target.value = ''
          // focus
          this.$input.focus()
        }
      }
    })

    this.$target.appendChild(this.$input)
  }
  this.render()
}
