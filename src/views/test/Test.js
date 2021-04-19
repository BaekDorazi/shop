import React, {useState, useEffect, useCallback, useMemo} from 'react'
import {CButton, CCard, CCardBody, CCardGroup, CCardHeader} from '@coreui/react'

const Test = ({match}) => {
  const [count, setCount] = useState(0);
  const doubleCount = count * 2;
  const doubleCount2 = useMemo(() => count * 2, [count]);

  console.log(doubleCount);
  console.log(doubleCount2);

  const handleClick = useCallback(() => {
    console.log("clicked! ", count);
  }, [count])

  return (
    <CCardGroup>
      <CCard>
        <CCardHeader>
          테스트
        </CCardHeader>
        <CCardBody>
          <CButton color="secondary" size='lg' onClick={() => setCount(count + 1)}>카운트 버튼</CButton>
          <CButton color="primary" size='lg' onClick={handleClick}>테스트</CButton>
        </CCardBody>
      </CCard>
    </CCardGroup>
  )
}

export default React.memo(Test)
