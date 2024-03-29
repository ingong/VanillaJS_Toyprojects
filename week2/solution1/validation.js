function checkSelector(selector) {
  const $target = document.querySelector(selector)
  if (!$target) throw new Error('해당 엘리먼트가 존재하지 않습니다.')
}

function checkData(data) {
  // 1. data 의 타입 확인
  // 2. data 가 있는지 여부 확인  
  // 3. data.length 가 0 이상인 경우에 수행
    // - 배열 내의 요소 존재 여부 확인
    // - 배열 내의 요소 타입 확인 (Object 인지)
      // - 배열 내의 요소 즉, Object 의 key 의 type 확인
      // - 전부 확인 후 validKeys 내에 존재하는지를 확인후 반환
  if (!Array.isArray(data)) throw new Error('data 타입이 배열이 아닙니다.')
  // if (data.length === 0) throw new Error('data가 비어있습니다.')
  // 초기애ㅔ 여기에 data 가 없어도 뜰 수 있게 해야한다
  if (data.length > 0) {
    if (data.some((element) => !element)) throw new Error('data 배열의 원소가 값이 없습니다.')
    data.forEach((element) => {
      if (!(element instanceof Object)) throw new Error('data 배열의 원소 타입은 Object 입니다.')
      const keys = Object.keys(element)
      const validKeys = new Set(['id', 'text', 'isCompleted'])
      keys.forEach((key) => {
        if (validKeys.has(key)) {
          validKeys.delete(key)
          if (key === 'text' && typeof element[key] !== 'string') throw new Error('text의 타입은 string입니다.')
          else if (key === 'isCompleted' && typeof element[key] !== 'boolean') throw new Error('isCompleted의 타입은 boolean입니다.')
        } else {
          throw new Error('data 배열의 원소 타입이 올바르지 않습니다.')
        }
      })
      if (validKeys.size !== 0) throw new Error('data 배열의 원소 타입이 올바르지 않습니다.')
    })
  }
}
