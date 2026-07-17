
    (function() {
      'use strict';

      /* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Toast helper Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */
      function showToast(msg, type) {
        var t = document.getElementById('evo-toast');
        t.textContent = msg;
        t.className = 'evo-toast-' + type;
        void t.offsetWidth;
        t.classList.add('evo-toast-show');
        setTimeout(function() { t.classList.remove('evo-toast-show'); }, 4500);
      }

      /* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Position an overlay element over a target Framer element Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */
      function coverEl(overlay, target) {
        var r = target.getBoundingClientRect();
        overlay.style.top    = (r.top  + window.scrollY) + 'px';
        overlay.style.left   = (r.left + window.scrollX) + 'px';
        overlay.style.width  = r.width  + 'px';
        overlay.style.height = r.height + 'px';
      }

      /* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Build the overlay form Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */
      function buildForm() {
        /* Guard: only run once */
        if (document.getElementById('evo-form-container')) return;

        var formContainer = document.createElement('div');
        formContainer.id = 'evo-form-container';
        formContainer.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:0;overflow:visible;pointer-events:none;z-index:9998;';
        document.body.appendChild(formContainer);

        /* Ã¢â€â‚¬Ã¢â€â‚¬ Helper: create input Ã¢â€â‚¬Ã¢â€â‚¬ */
        function makeInput(placeholder, type) {
          var el = document.createElement('input');
          el.type = type || 'text';
          el.placeholder = placeholder;
          el.className = 'evo-input-overlay';
          el.style.pointerEvents = 'all';
          formContainer.appendChild(el);
          return el;
        }

        /* Ã¢â€â‚¬Ã¢â€â‚¬ Helper: create select Ã¢â€â‚¬Ã¢â€â‚¬ */
        function makeSelect(options) {
          var el = document.createElement('select');
          el.className = 'evo-select-overlay';
          el.style.pointerEvents = 'all';
          options.forEach(function(o) {
            var opt = document.createElement('option');
            opt.value = o.value;
            opt.textContent = o.label;
            if (!o.value) opt.disabled = opt.selected = true;
            el.appendChild(opt);
          });
          formContainer.appendChild(el);
          return el;
        }

        /* Ã¢â€â‚¬Ã¢â€â‚¬ Helper: create checkbox Ã¢â€â‚¬Ã¢â€â‚¬ */
        function makeCheckbox() {
          var el = document.createElement('input');
          el.type = 'checkbox';
          el.className = 'evo-checkbox-overlay';
          el.style.pointerEvents = 'all';
          formContainer.appendChild(el);
          return el;




    <!-- Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
         EVO REGISTRATION FORM Ã¢â‚¬â€ INTERACTIVE OVERLAY
         Overlays real HTML inputs on top of Framer static divs
    Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â -->
    <style>
      /* Ã¢â€â‚¬Ã¢â€â‚¬ Shared input style Ã¢â€â‚¬Ã¢â€â‚¬ */
      .evo-input-overlay {
        position: absolute;
        background: transparent;
        border: none;
        outline: none;
        color: #fff;
        font-family: "DM Sans", sans-serif;
        font-size: 15px;
        caret-color: #fff;
        z-index: 9999;
        box-sizing: border-box;
        padding: 0 21px;
      }
      .evo-input-overlay::placeholder { color: rgba(117,117,117,1); }
      .evo-input-overlay.hide-placeholder::placeholder { color: transparent; }

      /* Ã¢â€â‚¬Ã¢â€â‚¬ Checkbox overlay Ã¢â€â‚¬Ã¢â€â‚¬ */
      .evo-checkbox-overlay {
        position: absolute;
        cursor: pointer;
        z-index: 9999;
        margin: 0;
        appearance: none;
        -webkit-appearance: none;
        background: transparent;
        border: none;
        outline: none;
      }
      .evo-checkbox-overlay:checked::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 19px;
        height: 19px;
        background-color: #00afdc;
        border-radius: 4px;
      }
      .evo-checkbox-overlay:checked::after {
        content: '';
        position: absolute;
        top: 2px;
        left: 6px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      }

      /* Ã¢â€â‚¬Ã¢â€â‚¬ Select overlay Ã¢â€â‚¬Ã¢â€â‚¬ */
      .evo-select-overlay {
        position: absolute;
        background: transparent;
        border: none;
        outline: none;
        color: transparent;
        font-family: "DM Sans", sans-serif;
        font-size: 15px;
        z-index: 9999;
        box-sizing: border-box;
        padding: 0 21px;
        appearance: none;
        -webkit-appearance: none;
        cursor: pointer;
      }
      .evo-select-overlay.has-value {
        color: #fff;
      }
      .evo-select-overlay option {
        background: #0d0d0d;
        color: #fff;
      }

      /* Ã¢â€â‚¬Ã¢â€â‚¬ Toast notification Ã¢â€â‚¬Ã¢â€â‚¬ */
      #evo-toast {
        position: fixed;
        bottom: 32px;
        left: 50%;
        transform: translateX(-50%) translateY(120px);
        padding: 14px 28px;
        border-radius: 12px;
        font-family: "DM Sans", sans-serif;
        font-size: 15px;
        font-weight: 500;
        z-index: 99999;
        transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1), opacity 0.4s ease;
        opacity: 0;
        pointer-events: none;
        white-space: nowrap;
        max-width: 90vw;
        text-align: center;
      }
      #evo-toast.evo-toast-success {
        background: linear-gradient(135deg, #006eaa, #00afdc);
        color: #fff;
        box-shadow: 0 8px 32px rgba(0,175,220,0.4);
      }
      #evo-toast.evo-toast-error {
        background: linear-gradient(135deg, #7f0000, #cc2200);
        color: #fff;
        box-shadow: 0 8px 32px rgba(200,0,0,0.4);
      }
      #evo-toast.evo-toast-show {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
      }

      /* Ã¢â€â‚¬Ã¢â€â‚¬ Submit button loading state Ã¢â€â‚¬Ã¢â€â‚¬ */
      .evo-btn-loading {
        opacity: 0.6;
        pointer-events: none;
        cursor: not-allowed;
      }
    </style>

    <div id="evo-toast"></div>

    <script>
    (function() {
      'use strict';

      /* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Toast helper Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */
      function showToast(msg, type) {
        var t = document.getElementById('evo-toast');
        t.textContent = msg;
        t.className = 'evo-toast-' + type;
        void t.offsetWidth;
        t.classList.add('evo-toast-show');
        setTimeout(function() { t.classList.remove('evo-toast-show'); }, 4500);
      }

      /* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Position an overlay element over a target Framer element Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */
      function coverEl(overlay, target) {
        var r = target.getBoundingClientRect();
        overlay.style.top    = (r.top  + window.scrollY) + 'px';
        overlay.style.left   = (r.left + window.scrollX) + 'px';
        overlay.style.width  = r.width  + 'px';
        overlay.style.height = r.height + 'px';
      }

      /* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Build the overlay form Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */
      function buildForm() {
        /* Guard: only run once */
        if (document.getElementById('evo-form-container')) return;

        var formContainer = document.createElement('div');
        formContainer.id = 'evo-form-container';
        formContainer.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:0;overflow:visible;pointer-events:none;z-index:9998;';
        document.body.appendChild(formContainer);

        /* Ã¢â€â‚¬Ã¢â€â‚¬ Helper: create input Ã¢â€â‚¬Ã¢â€â‚¬ */
        function makeInput(placeholder, type) {
          var el = document.createElement('input');
          el.type = type || 'text';
          el.placeholder = placeholder;
          el.className = 'evo-input-overlay';
          el.style.pointerEvents = 'all';
          formContainer.appendChild(el);
          return el;
        }

        /* Ã¢â€â‚¬Ã¢â€â‚¬ Helper: create select Ã¢â€â‚¬Ã¢â€â‚¬ */
        function makeSelect(options) {
          var el = document.createElement('select');
          el.className = 'evo-select-overlay';
          el.style.pointerEvents = 'all';
          options.forEach(function(o) {
            var opt = document.createElement('option');
            opt.value = o.value;
            opt.textContent = o.label;
            if (!o.value) opt.disabled = opt.selected = true;
            el.appendChild(opt);
          });
          formContainer.appendChild(el);
          return el;
        }

        /* Ã¢â€â‚¬Ã¢â€â‚¬ Helper: create checkbox Ã¢â€â‚¬Ã¢â€â‚¬ */
        function makeCheckbox() {
          var el = document.createElement('input');
          el.type = 'checkbox';
          el.className = 'evo-checkbox-overlay';
          el.style.pointerEvents = 'all';
          formContainer.appendChild(el);
          return el;
        }

        /* Ã¢â€â‚¬Ã¢â€â‚¬ Create overlay inputs Ã¢â€â‚¬Ã¢â€â‚¬ */
        var emailInput    = makeInput('official@schoolunion.com', 'email');
        var phoneInput    = makeInput('XX XXX XXXX', 'tel');
        var presidentInput= makeInput('Science Union / Society President', 'text');
        var micInput      = makeInput('Science Society MIC', 'text');
        var schoolInput   = makeInput('e.g., D. S. Senanayake College', 'text');

        /* Hide HTML placeholders so they don't overlap with Framer's built-in placeholders */
        emailInput.classList.add('hide-placeholder');
        presidentInput.classList.add('hide-placeholder');
        micInput.classList.add('hide-placeholder');
        schoolInput.classList.add('hide-placeholder');
        phoneInput.classList.add('hide-placeholder');
        var awardSelect   = makeSelect([
          { value: '',                  label: 'Select a subject...' },
          { value: 'Physics',           label: 'Physics' },
          { value: 'Chemistry',         label: 'Chemistry' },
          { value: 'Biology',           label: 'Biology' },
          { value: 'Combined Maths',    label: 'Combined Maths' },
        ]);
        var checkbox = makeCheckbox();

                function injectMicBox() {
          var container = document.querySelector('.framer-133mpl8');
          if (!container || document.querySelector('.mic-box-injected')) return;

          var style = document.createElement('style');
          style.innerHTML = `
            .framer-133mpl8 { height: 1546px !important; }
            .framer-72rtr7 { height: 2059px !important; }
            .framer-1ex2qu8 { top: 620px !important; }
            .framer-s46at3 { top: 700px !important; }
          `;
          document.head.appendChild(style);

          var presLabel = document.querySelector('.framer-s46at3');
          if (presLabel) {
            var micLabel = presLabel.cloneNode(true);
            micLabel.classList.remove('framer-s46at3');
            micLabel.classList.add('mic-label-injected');
            var micLabelSpan = micLabel.querySelector('span');
            if (micLabelSpan) micLabelSpan.textContent = 'MIC Name';
            micLabel.style.cssText = 'top: 808px !important; bottom: auto !important; position: absolute;';
            container.appendChild(micLabel);
          }

          var presBox = document.querySelector('.framer-rv89xf');
          if (presBox) {
            var micBox = presBox.cloneNode(true);
            micBox.classList.remove('framer-rv89xf');
            micBox.classList.add('mic-box-injected');
            var micBoxPlaceholder = micBox.querySelector('span');
            if (micBoxPlaceholder) micBoxPlaceholder.textContent = 'Science Society MIC';
            micBox.style.cssText = 'top: 836px !important; bottom: auto !important; position: absolute; right: 139px; left: 192px; height: 56px; border-radius: 10px; background-color: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255,255,255,0.1);';
            container.appendChild(micBox);
          }
        }
        injectMicBox();

        awardSelect.addEventListener('change', function() {
          var awardBox = document.querySelector('.framer-14zqfq1');
          var isSelected = (this.value !== '');
          if (isSelected) {
            this.classList.add('has-value');
          } else {
            this.classList.remove('has-value');
          }
          if (awardBox) {
            var c = isSelected ? 'transparent' : '';
            awardBox.style.setProperty('color', c, isSelected ? 'important' : '');
            awardBox.style.setProperty('-webkit-text-fill-color', c, isSelected ? 'important' : '');
            var spans = awardBox.querySelectorAll('*');
            for (var i=0; i<spans.length; i++) {
              spans[i].style.setProperty('color', c, isSelected ? 'important' : '');
              spans[i].style.setProperty('-webkit-text-fill-color', c, isSelected ? 'important' : '');
            }
          }
        });

        function bindHideTextOnInput(inputEl, boxSelector) {
          inputEl.addEventListener('input', function() {
            var box = document.querySelector(boxSelector);
            var isNotEmpty = (this.value !== '');
            if (box) {
              var c = isNotEmpty ? 'transparent' : '';
              box.style.setProperty('color', c, isNotEmpty ? 'important' : '');
              box.style.setProperty('-webkit-text-fill-color', c, isNotEmpty ? 'important' : '');
              var spans = box.querySelectorAll('*');
              for (var i=0; i<spans.length; i++) {
                spans[i].style.setProperty('color', c, isNotEmpty ? 'important' : '');
                spans[i].style.setProperty('-webkit-text-fill-color', c, isNotEmpty ? 'important' : '');
              }
            }
          });
        }

        bindHideTextOnInput(schoolInput, '.framer-1ex2qu8');
        bindHideTextOnInput(emailInput, '.framer-yys7yq');
        bindHideTextOnInput(presidentInput, '.framer-rv89xf');
        bindHideTextOnInput(micInput, '.mic-box-injected');

        /* Phone input is special: we only want to hide the XX XXX XXXX part, keeping +94 visible */
        phoneInput.addEventListener('input', function() {
          var box = document.querySelector('.framer-154epjs');
          var isNotEmpty = (this.value !== '');
          if (box) {
             var spans = box.querySelectorAll('*');
             for (var i = 0; i < spans.length; i++) {
               var el = spans[i];
               if (el.children.length === 0 && (el.hasAttribute('data-orig-text') || (el.textContent && el.textContent.includes('X')))) {
                  if (isNotEmpty) {
                     if (!el.hasAttribute('data-orig-text')) {
                        el.setAttribute('data-orig-text', el.textContent);
                     }
                     el.textContent = el.getAttribute('data-orig-text').replace(/X/g, '').replace(/\s{2,}/g, ' ');
                  } else {
                     if (el.hasAttribute('data-orig-text')) {
                        el.textContent = el.getAttribute('data-orig-text');
                     }
                  }
               }
             }
          }
        });

        /* -- Position all overlays -- */
        function positionAll() {
          /* Email â€” framer-yys7yq */
          var emailBox = document.querySelector('.framer-yys7yq');
          if (emailBox) { emailInput.style.display = 'block'; coverEl(emailInput, emailBox); }
          else emailInput.style.display = 'none';

          /* Contact number â€” framer-154epjs (phone input area, after the +94 prefix) */
          var phoneBox = document.querySelector('.framer-154epjs');
          if (phoneBox) {
            var r = phoneBox.getBoundingClientRect();
            phoneInput.style.display = 'block';
            phoneInput.style.top     = (r.top  + window.scrollY) + 'px';
            phoneInput.style.left    = (r.left + window.scrollX + 61) + 'px'; /* offset past +94 */
            phoneInput.style.width   = (r.width - 61 - 21) + 'px';
            phoneInput.style.height  = r.height + 'px';
            phoneInput.style.paddingLeft = '0px'; /* prevent double-shifting cursor */
          } else phoneInput.style.display = 'none';

          /* President name â€” framer-rv89xf */
          var presBox = document.querySelector('.framer-rv89xf');
          if (presBox) { presidentInput.style.display = 'block'; coverEl(presidentInput, presBox); }
          else presidentInput.style.display = 'none';
          
          /* MIC name â€” mic-box-injected */
          var micBox = document.querySelector('.mic-box-injected');
          if (micBox) { micInput.style.display = 'block'; coverEl(micInput, micBox); }
          else micInput.style.display = 'none';

          /* School name â€” framer-1ex2qu8 */
          var schoolBox = document.querySelector('.framer-1ex2qu8');
          if (schoolBox) { schoolInput.style.display = 'block'; coverEl(schoolInput, schoolBox); }
          else schoolInput.style.display = 'none';

          /* Subject â€” framer-14zqfq1 */
          var awardBox = document.querySelector('.framer-14zqfq1');
          if (awardBox) {
            awardSelect.style.display = 'block';
            coverEl(awardSelect, awardBox);
          } else awardSelect.style.display = 'none';

          /* Confirmation checkbox â€” framer-18u2wcn */
          var cbBox = document.querySelector('.framer-18u2wcn');
          if (cbBox) { checkbox.style.display = 'block'; coverEl(checkbox, cbBox); }
          else checkbox.style.display = 'none';
        }

        positionAll();

        /* Re-position on scroll/resize */
        window.addEventListener('scroll', positionAll, { passive: true });
        window.addEventListener('resize', positionAll, { passive: true });

        /* -- Wire up Submit button -- */
        function wireSubmitButton() {
          var btnEl = document.querySelector('.framer-nx1ytg');
          if (!btnEl || btnEl._evoWired) return;
          btnEl._evoWired = true;
          btnEl.style.cursor = 'pointer';
          btnEl.style.pointerEvents = 'all';

          btnEl.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            var email       = emailInput.value.trim();
            var phone       = phoneInput.value.trim();
            var president   = presidentInput.value.trim();
            var mic         = micInput.value.trim();
            var school      = schoolInput.value.trim();
            var award       = awardSelect.value;
            var confirmed   = checkbox.checked;

            /* - Client-side validation - */
            if (!email || !phone || !school || !award || !president || !mic) {
              showToast('?? Please fill in all required fields.', 'error');
              return;
            }
            if (!confirmed) {
              showToast('?? Please confirm you are an official representative.', 'error');
              return;
            }
            var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRe.test(email)) {
              showToast('?? Please enter a valid email address.', 'error');
              return;
            }

            /* - Loading state - */
            btnEl.classList.add('evo-btn-loading');
            var textEl = btnEl.querySelector('.framer-19125hz span, .framer-19125hz');
            var origText = textEl ? textEl.textContent : '';
            if (textEl) textEl.textContent = 'Submittingâ€¦';

            fetch('/api/evo/register', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                schoolName:    school,
                presidentName: president,
                micName:       mic,
                emailAddress:  email,
                contactNumber: phone,
                awardCategory: award,
                confirmation:  confirmed,
              }),
            })
            .then(function(res) { return res.json(); })
            .then(function(data) {
              btnEl.classList.remove('evo-btn-loading');
              if (textEl) textEl.textContent = origText;

              if (data.success) {
                showToast('? Registration submitted successfully! We\'ll be in touch.', 'success');
                /* Clear the form */
                emailInput.value = '';
                phoneInput.value = '';
                presidentInput.value = '';
                micInput.value = '';
                schoolInput.value = '';
                awardSelect.selectedIndex = 0;
                checkbox.checked = false;
              } else {
                showToast('? ' + (data.error || 'Submission failed. Please try again.'), 'error');
              }
            })
            .catch(function() {
              btnEl.classList.remove('evo-btn-loading');
              if (textEl) textEl.textContent = origText;
              showToast('Ã¢ÂÅ’ Network error. Please check your connection and try again.', 'error');
            });
          });
        }

        /* Try immediately, then keep watching */
        wireSubmitButton();
        var submitObserver = new MutationObserver(wireSubmitButton);
        submitObserver.observe(document.getElementById('main'), { childList: true, subtree: true });
      }

      /* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Watch for Framer to render the form elements Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */
      var observer = new MutationObserver(function(mutations) {
        /* Look for the email input container as a signal that Framer has rendered */
        if (document.querySelector('.framer-yys7yq') && document.querySelector('.framer-nx1ytg')) {
          observer.disconnect();
          /* Small delay to ensure layout is settled */
          setTimeout(buildForm, 120);
        }
      });

      observer.observe(document.body, { childList: true, subtree: true });

      /* Fallback: try on DOMContentLoaded + load */
      document.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
          if (document.querySelector('.framer-yys7yq')) {
            observer.disconnect();
            buildForm();
          }
        }, 500);
      });

    })();
    