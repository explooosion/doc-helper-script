javascript:
(() => {

  /** 放入要偵測錯字的文字方塊或文字區域 */
  const elements = [
    document.getElementById('txSubject'),
  ];

  /** 字典, 新增前記得先搜尋是否已經有 */
  const dictionaries = [
    /** Example */
    /** { source: '來源文字', target: '來源變更' }, */

    /** 標點符號 */
    { source: '句號', target: '。' },
    { source: '逗號', target: '，' },
    { source: '頓號', target: '、' },
    { source: '冒號', target: '：' },
    { source: '分號', target: '；' },

    /** 通用 */
    { source: '和銷', target: '核銷' },
    { source: '暨還', target: '寄還' },
    { source: '寄在', target: '暨在' },
    { source: '另其', target: '令其' },
    { source: '該元', target: '該員' },

    /** 單位或幣別 */
    { source: '新台幣', target: '新臺幣' },
    { source: '以份', target: '乙份' },
    { source: '以紙', target: '乙紙' },
    { source: '1分', target: '1份' },
    { source: '1捲', target: '1卷' },
    { source: '員整枝', target: '元整之' },
    { source: '一世', target: '一式' },
    { source: '整隻', target: '整之' },
    { source: '員統一', target: '元統一' },

    /** 抬頭 */
    { source: '本事', target: '本市' },
    { source: '本是', target: '本市' },
    { source: '本數', target: '本署' },
    { source: '本屬', target: '本署' },
    { source: '貴數', target: '貴署' },
    { source: '貴屬', target: '貴署' },
    { source: '均屬', target: '鈞署' },

    /** 結語敬語 */
    { source: '請察照', target: '請查照' },
    { source: '翔如說明', target: '詳如說明' },
    { source: '建核', target: '鑒核' },
    { source: '請建和', target: '請鑒核' },
    { source: '穢語', target: '惠予' },
    { source: '婦孺說明', target: '復如說明' },
    { source: '儒說明', target: '如說明' },
    { source: '復健', target: '附件' },
    { source: '會復', target: '惠復' },
    { source: '會請', target: '惠請' },
    { source: '竟請', target: '敬請' },
    { source: '會請審查', target: '惠請審查' },
    { source: '會請查覆', target: '惠請查復' },
    { source: '敬請合適', target: '敬請核示' },
    { source: '請何處惠復', target: '請核處惠覆' },
    { source: '建富', target: '見復' },

    /** 徵集 */

    /** 權益 */
    { source: '捷報單', target: '結報單' },

    /** 秘書 */

    /** 人事 */

    /** 主計 */

    /** 政風 */

    /** 管理 */

    /** 甄選 */
    { source: '一班替代役', target: '一般替代役' },
    { source: '一議案', target: '疑義案' },
    { source: '補福一班', target: '補服一般' },
    { source: '回憶', target: '回役' },
    { source: '免與', target: '免予' },

    /** 訓練 */

  ];

  /** 異動紀錄 */
  const history = [];

  /**
   * 全域替換文字
   * @param {String} text 目標內文
   * @param {String} source 原始關鍵字
   * @param {String} target 替換關鍵字
   */
  const useReplace = (text = '', source = '', target = '') => {
    const regex = new RegExp(source, 'g');
    if (regex.test(text)) history.push(source);
    return text.replace(regex, target);
  };

  /**
   * 檢測文字迭代更新
   * @param {HTMLElement} element 目標元素
   * @param {Array} dictionary 目標字典
   */
  const useDetect = (element, dictionary = []) =>
    dictionary.reduce((prev, { source, target }) =>
      useReplace(prev, source, target), element.value);

  /**
   * 事件監聽
   * @param {HTMLElement} element 目標元素
   */
  const onKeyUpHandler = ({ target: element }) => {
    if (typeof element === 'undefined') return console.error('找不到目標元素');
    const result = useDetect(element, dictionaries);
    /** 請不要使用 !== */
    if (element.value != result) {
      console.log('本次校正：', element.value, '=>', result);
      console.log('異動歷程：', history);
      element.value = result;
      /** 中斷中文輸入法選字狀態 */
      element.blur();
      element.focus();
    }
  };

  /** 校正程式執行 */
  elements.forEach(
    element => element.addEventListener('keyup', onKeyUpHandler)
  );

})();
