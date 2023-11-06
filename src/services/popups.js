import $ from "jquery";
window.$ = $;
import { Modal } from "bootstrap";
export default {
  install(Vue) {
    Vue.config.globalProperties.popup = {
      alert(options) {
        return new Promise((resolve) => {
          var self = Vue.config.globalProperties;
          var x =
            $(`<div class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog ">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" style="width:100%">${
              options?.title?.includes(".") && !options?.title?.includes(" ")
                ? options.title
                : options.title
            }</h5>
                    </div>
                    <div class="modal-body ">
                     <h5>${
                       options?.msg?.includes(".") &&
                       !options?.msg?.includes(" ")
                         ? options.msg
                         : options.msg
                     }</h5>
                    </div>
                    <div class="modal-footer ">
                     <button type="button" class="btn btn-success " data-bs-dismiss="modal">ok</button>
                    </div>
                  </div>
                </div>
              </div>`);
          $("body").append(x);

          var modal = new Modal(x);
          modal.show();

          $(x)
            .find("button")
            .one("click", function () {
              setTimeout(() => {
                $(x).remove();
                resolve();
              }, 300);
            });
        });
      },
      confirm(options) {
        return new Promise((resolve) => {
          var self = Vue.config.globalProperties;
          var x =
            $(`<div class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog ">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title " style="width:100%">${options.title}</h5>
                    </div>
                    <div class="modal-body ">
                     <h5>${options.msg}</h5>
                    </div>
                    <div  class="modal-footer">
                    <button class='btn btn-danger mx-1' " data-bs-dismiss="modal">delete</button>

                     <button type="button" class="btn btn-light " data-bs-dismiss="modal">cancel</button>
                    </div>
                  </div>
                </div>
              </div>`);
          $("body").append(x);

          var modal = new Modal(x);
          modal.show();
          console.log("Modal Opened");
          $(x)
            .find("button:first")
            .one("click", function () {
              console.log("First Button Clicked");
              setTimeout(() => {
                console.log("Removing");
                $(x).remove();
                resolve(true);
              }, 300);
            });
          $(x)
            .find("button:last")
            .one("click", function () {
              setTimeout(() => {
                $(x).remove();
                resolve(false);
              }, 300);
            });
        });
      },
      prompt(options) {
        return new Promise((resolve) => {
          var self = Vue.config.globalProperties;
          var x =
            $(`<div class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog ">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title " style="width:100%">${options.title}</h5>
                    </div>
                    <div class="modal-body ">
                     <h5>
                     <input type="${
                       options.type ? options.type : "text"
                     }" class="form-control" placeholder="${
              options.placeholder ? options.placeholder : ""
            }">
                     </h5>
                    </div>
                    <div dir="" class="modal-footer " justify-content-end" : ""
            }">
                     <button type="button" class="btn btn-success " data-bs-dismiss="modal">ok</button>
                     <button type="button" class="btn btn-light " data-bs-dismiss="modal">
                     cancel
                     </button>
                    </div>
                  </div>
                </div>
              </div>`);
          $("body").append(x);

          var modal = new Modal(x);
          modal.show();

          $(x)
            .find("button:first")
            .one("click", function () {
              setTimeout(() => {
                $(x).remove();
                var value = $(x).find("input").val();
                resolve(value);
              }, 300);
            });
          $(x)
            .find("button:last")
            .one("click", function () {
              setTimeout(() => {
                $(x).remove();
                resolve(false);
              }, 300);
            });
        });
      },
      modal(options) {
        return new Promise((resolve) => {
          var inputs = [];
          var self = Vue.config.globalProperties;
          var x =
            $(`<div class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                  <div class="modal-content">
                    <div class="modal-header" >
                      <h5 class="modal-title " style="width:100%">${options.title}</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body ">
                     <h5>
                     ${options.template ? options.template : ""}
                     </h5>
                     <form class='inputs'></form>
                    </div>
                    <div class="buttons modal-footer d-flex >
                     
                    </div>
                  </div>
                </div>
              </div>`);
          if (options.inputs) {
            options.inputs.forEach(function (input) {
              var inputOptions;
              var inputTemplate = $(`
                    <div class="mb-3">
                      <label for="message-text" class="col-form-label">
                        ${input.label}  
                      </label>

              </div>
                    `);
              if (input.type == "select") {
                inputOptions = input.options
                  .map(
                    (option) =>
                      `<option   value="${option.value}"  ${
                        input.value == option.value ? "selected" : ""
                      }>${option.label}</option>`
                  )
                  .join("\n");
                $(inputTemplate).append(
                  `<select ${
                    input.restrictions
                      ? Object.keys(input.restrictions)
                          .map((key) => `${key}="${input.restrictions[key]}"`)
                          .join(" ")
                      : ""
                  }  class="form-select">${inputOptions}</select>`
                );
                inputs.push({
                  type: input.type,
                  model: input.model,
                  template: inputTemplate,
                });
              } else if (input.type == "ckeditor") {
                console.log(input.type);
                $(inputTemplate).append(
                  `<textarea  ${
                    input.restrictions
                      ? Object.keys(input.restrictions)
                          .map((key) => `${key}="${input.restrictions[key]}"`)
                          .join(" ")
                      : ""
                  }  class="myTextArea" value="${
                    input.value ? input.value : ""
                  }" name="${input.value ? input.value : ""}" placeholder="${
                    input.placeholder ? input.placeholder : ""
                  }"></textarea>`
                );

                // setTimeout(() => {
                window.ClassicEditor.create($(inputTemplate)[0])
                  .then((editor) => {
                    if (input.value) editor.setData(input.value);
                    console.log("Editor was initialized", editor);
                    inputs.push({
                      type: input.type,
                      model: input.model,
                      template: inputTemplate,
                      editor,
                    });
                  })
                  .catch((error) => {
                    console.error(error);
                  });
                // }, 30);
              } else if (input.type == "radio") {
                inputOptions = input.options.map(
                  (option) => `
                      <div class="form-check">
                      <input class="form-check-input" id="${input.label}-${
                    option.label
                  }" type='radio' name='${input.label}' ${
                    option.checked ? "checked" : ""
                  } value='${option.value}'>
                       <label class="form-check-label" for="${input.label}-${
                    option.label
                  }">${option.label}</label>
                       </div>
                      `
                );
                $(inputTemplate).append(inputOptions);
                inputs.push({
                  type: input.type,
                  model: input.model,
                  template: inputTemplate,
                });
              } else if (input.type == "date") {
                $(inputTemplate).append(
                  `<input  ${
                    input.restrictions
                      ? Object.keys(input.restrictions)
                          .map((key) => `${key}="${input.restrictions[key]}"`)
                          .join(" ")
                      : ""
                  }  class="form-control" type="${input.type}" value="${
                    input.value ? input.value.substring(0, 10) : ""
                  }" >`
                );
                inputs.push({
                  type: input.type,
                  model: input.model,
                  template: inputTemplate,
                });
              } else if (input.type == "checkbox") {
                inputOptions = input.options.map((option) =>
                  $(`
                      <div class="form-check">
                      <input class="form-check-input" id="${input.label}-${
                    option.label
                  }" type='checkbox' ${option.checked ? "checked" : ""} name='${
                    option.label
                  }'>
                       <label class="form-check-label" for="${input.label}-${
                    option.label
                  }">${option.label}</label>
                       </div>
                      `)
                );
                $(inputTemplate).append(inputOptions);
                inputs.push({
                  type: input.type,
                  model: input.model,
                  templates: inputOptions,
                });
              } else {
                $(inputTemplate).append(
                  `<input ${input.disabled && "disabled"}${
                    input.restrictions
                      ? Object.keys(input.restrictions)
                          .map((key) => `${key}="${input.restrictions[key]}"`)
                          .join(" ")
                      : ""
                  }  class="form-control" type="${input.type}" value="${
                    input.value ? input.value : ""
                  }" >`
                );
                inputs.push({
                  type: input.type,
                  model: input.model,
                  template: inputTemplate,
                });
              }
              $(inputTemplate).append(`<div class="invalid-feedback"> </div>`);
              $(x).find(".inputs").append(inputTemplate);
            });
          }
          if (options.buttons) {
            options.buttons.forEach((button) => {
              var buttonTemplate = $(
                `<button class='btn btn-${
                  button.color
                } type="button" mx-1'>${button.text}</button>`
              );
              $(buttonTemplate).on("click", () => {
                if (button.closer) {
                  if (!$(x).find(".inputs")[0].checkValidity()) {
                    $(x).find(".inputs").addClass("was-validated");
                    inputs.forEach((input) => {
                      if (input.type != "select") {
                        var msg =
                          input.template.find("input")[0].validationMessage;
                        if (msg) {
                          input.template.find(".invalid-feedback").text(msg);
                        }
                      }
                    });

                    return;
                  }
                  var data = {};
                  inputs.forEach((input) => {
                    if (input.type == "checkbox") {
                      var values = input.templates.map((oneCheckbox) => {
                        var name = $(oneCheckbox).find("input").prop("name");
                        var value = $(oneCheckbox).find("input").is(":checked");
                        console.log(
                          $(oneCheckbox).find("input").prop("outerHTML")
                        );
                        return { [name]: value };
                      });
                      data[input.model] = values;
                    } else if (input.type == "radio") {
                      var name = $(input.template).find("input").prop("name");
                      data[input.model] = $(input.template)
                        .find(`[name=${name}]:checked`)
                        .val();
                    } else if (input.type == "file") {
                      data[input.model] =
                        $(input.template).find(`input`)[0].files.length > 1
                          ? $(input.template).find(`input`)[0].files
                          : $(input.template).find(`input`)[0].files[0];
                    } else if (input.type == "ckeditor") {
                      // var name = $(input.template).find("input").prop("name");
                      data[input.model] = input.editor.getData();
                    } else {
                      data[input.model] = $(input.template)
                        .find(`input,select`)
                        .val();
                    }
                  });
                  $(".myTextArea").css("display", "visible");
                  modal.hide();
                  setTimeout(() => {
                    resolve();
                    $(x).remove();
                  }, 300);
                }
                button.handler(data);
              });
              $(x).find(".buttons").append(buttonTemplate);
            });
          }

          $("body").append(x);
          var modal = new Modal(x);
          modal.show();
        });
      },
    };
  },
};
