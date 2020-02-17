javascript:
(function () {
  function request() {
    /** ODT134 URL */
    const URL = ':-)';
    fetch(URL)
      .then(res => res.text())
      .then(html => $.parseHTML(html)[23])
      .then(element => {
        const len = element.querySelectorAll('#dg1 tr').length;
        const mail = [].filter.call(element.querySelectorAll('#dg1 tr td:nth-child(4) a'), a => a.innerText.includes('首長')).length;
        return { len, mail };
      })
      .then(({ len, mail }) => len > 0 || len === 1 && mail === 1
        ? clearTimeout(rq) || alert(`有新電子交換！ 信箱 ${mail} 筆，共 ${len - 1} 筆。`) || $('#Uptree_2_span').click() /* Open 0DT130 */
        : console.log('已檢查新電子交換', new Date())
      );
  }
  console.log('開始檢查電子交換...');
  const rq = setInterval(request, 60 * 1000);
})();

