import { replacePersianDigits } from './replacePersianDigits';

export default {
    beforeMount(el, binding) {
        function onInput(event) {
            const originalValue = event.target.value;
            const convertedValue = replacePersianDigits(originalValue);
            if (originalValue !== convertedValue) {
                event.target.value = convertedValue;
                event.target.dispatchEvent(new Event('input', { bubbles: true }));
            }
        }

        el._onInput = onInput;
        el.addEventListener('input', onInput);
    },

    unmounted(el, binding) {
        el.removeEventListener('input', el._onInput);
        delete el._onInput;
    },
};