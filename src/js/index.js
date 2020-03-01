/**
 * @param {string} text
 * @param {HTMLElement} element
 * @return {void}
 */
function injectTextToElement (text = '', element) {
  if (!element) {
    throw new Error('Error in injectTextToElement(): You should use a valid HTML element as input')
  }

  element.textContent = text
}

/**
 * @param {string} color
 * @param {HTMLElement} element
 * @return {void}
 */
function changeLayoutColor (color, element) {
  if (!element) {
    throw new Error('Error in changeLayoutColor(): You should use a valid HTML element as input')
  }

  if (typeof color !== 'string') {
    throw new Error('Error in changeLayoutColor(): You should use a valid color as input')
  }

  element.style.backgroundColor = color
}

var clickBtn = document.getElementById('clickBtn')
var label = document.getElementById('dialog-form-label')
var dialog = document.querySelector('dialog')
var output = document.querySelector('output')
var layout = document.querySelector('article')

clickBtn.addEventListener('click', function onOpen () {
  if (typeof dialog.showModal === 'function') {
    dialog.showModal()
    injectTextToElement('Are you sure you want to continue?', label)
    changeLayoutColor('grey', layout)
  } else {
    alert('The <dialog> API is not supported by this browser')
  }
})

dialog.addEventListener('close', function onClose () {
  var chosen = dialog.returnValue
  output.value = `You just clicked "${chosen}"`
  changeLayoutColor('#eee', layout)
})
