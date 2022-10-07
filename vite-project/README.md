# 과제 1

**2) 버튼을 클릭하면 해당 페이지로, 뒤로 가기 버튼을 눌렀을 때 이전 페이지로 이동해야 한다.**

- 힌트) `window.onpopstate`, `window.location.pathname` History API(`pushState`)** 에 대한 추가 공부.

<br>

### window.onpopstate  

`window.onpopstate = function() { };`

`window` 인터페이스의 `popstate` 이벤트는 사용자의 세션 기록 탐색으로 인해 현재 활성화된 기록 항목이 바뀔 때 발생한다.
크롬은 페이지 로딩시에 `popstate` 이벤트를 발생시킨다.

활성화된 엔트리가 `history.pushStat()` 나 `history.replaceState()` 메서드에 의해 생성되면, 
`popstate` 이벤트의 state 속성은 히스토리 엔트리 state 객체의 복사본을 갖게 된다.

<br>

### window.location.pathname 

`window.location` 객체는 현재 페이지의 주소(URL)을 찾거나 새로운 페이지로 이동시키는 데 사용한다. 
Prefix 없이 `location`만 사용가능하다.

여러 프로퍼티 중 `window.location.pathname` 은 현재 페이지의 경로와 파일이름을 반환한다.
예를 들어 http://google.com/login/1 라는 URL에선 /login/1 이 반환됩니다.

<br>

### History API : pushState

`history.pushState(state, unused[, url])` 메소드는 브라우저의 세션 히스토리 스택에 엔트리를 추가한다.

* `state` : 자바스크립트 객체. `pushState`로 생성된 새로운 히스토리 엔트리를 담고있다. <br>
유저가 새로운 `state`로 이동할 때마다 `popstate` 이벤트가 발생하는데, 
이 때 이벤트의 `state` 프로퍼티는 히스토리 엔트리의 `state` 객체의 복사본을 담는다. <br>
(+ 브라우저 이동시 념겨줄 데이터. popstate에서 받아서 원하는 처리를 해줄 수 있음(?))

* `unused` : 더 이상 사용되지 않으나 생략 불가. 빈 문자열을 넣도록 한다.

* `url` : 새로운 히스토리 엔트리의 URL. <br>
절대 경로나 현재 URL의 상대 경로를 허용한다.
현재 URL과 **동일한 origin**이어야 한다. 아니라면 `putState`에서 exception을 발생시킨다.
값이 주어지지 않는다면 document의 현재 URL로 주어진다. <br>
참고로, `pushState` 호출 이후에 브라우저는 해당 URL을 로드하지 않는다.
단, 이후에는 (예를 들어, 유저가 브라우저를 restart한다면) URL을 로드하려할 수 있다.

<br>

쉽게 말해 `pushState`는 페이지 이동 없이 주소만 바꾼다. (브라우저의 뒤로가기 버튼은 활성화된다.)

브라우저에서 페이지를 이동하면 `window.onpopstate`라는 이벤트가 발생하는데,
`pushState`를 했을 때는 **popstate 이벤트가 발생하지 않는다.**
뒤로 가기/앞으로 가기 버튼을 클릭하거나 `history.back()` 호출 등을 통해서만 popstate 이벤트가 발생한다.

즉, **`pushState`와 `onpopstate` 둘을 이용해 SPA의 페이지 전환을 구현할 수 있다.**