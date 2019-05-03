import {
  buildDOMElement,
  buildRowDiv
} from "./buildDOMElement";
import {
  showCategoryOptionBox
} from "./API-interface";


module.exports.createArticle = function (articleToEdit) {
  let newArticle = true;
  if (articleToEdit) newArticle = false;

  // Begin building article form to add/edit blog post
  let fragment = document.createDocumentFragment();
  let section = buildDOMElement("section", fragment, null, ["section-block", "replicable-content", "content-2", "no-padding-top"], "section-add");
  let rowDiv = buildRowDiv(section);
  let columnDiv1 = buildDOMElement("div", rowDiv, null, ["column", "width-8", "offset-2", "center"]);


  let title = newArticle ? "Add a Journal Entry" : `Edit the ${articleToEdit.postTitle} Article`;
  buildDOMElement("h2", columnDiv1, title, ["mb-30"]);
  let articleForm = buildDOMElement("form", columnDiv1, null); //  Add "contact-form" class?
  let rowDiv2 = buildRowDiv(articleForm);
  rowDiv2.appendChild(addField("Post Title", "text", "postTitle", 1));
  rowDiv2.appendChild(addField("Post Date", "date", "date", 2));
  let categorySelectDiv = buildDOMElement("div", rowDiv2, null,
    ["form-select", "form-element", "large"], "", {});
  showCategoryOptionBox().then(box => categorySelectDiv.appendChild(box));

  return fragment;
};

function addField(labelText, inputType, inputId, tabIndex) {
  let fragment = document.createDocumentFragment();
  let div = buildDOMElement("div", fragment, null);
  buildDOMElement("input", div, null, null, inputId, {
    type: inputType,
    name: inputId,
    id: inputId,
    placeholder: labelText,
    tabIndex: tabIndex
  });
  return fragment;
}

function addColumn(parent, widthNum) {
  return buildDOMElement("div", parent, null, ["column", `width-${widthNum}`]);
}


// <section class="section-block replicable-content contact-2 no-padding-top">
// <div class="row">
//   <div class="column width-8 offset-2 center">
//     <h2 class="mb-30">Say Hello</h2>
//     <div class="contact-form-container">
//       <form class="contact-form" action="php/send-email.php" method="post" novalidate>
//         <div class="row">
//           <div class="column width-6">
//             <input type="text" name="fname" class="form-fname form-element large" placeholder="First Name*" tabindex="1" required>
//           </div>
//           <div class="column width-6">
//             <input type="text" name="lname" class="form-lname form-element large" placeholder="Last Name" tabindex="2">
//           </div>
//           <div class="column width-6">
//             <input type="email" name="email" class="form-email form-element large" placeholder="Email address*" tabindex="3" required>
//           </div>
//           <div class="column width-6">
//             <input type="text" name="website" class="form-website form-element large" placeholder="Website" tabindex="4">
//           </div>
//           <div class="column width-6">
//             <div class="form-select form-element large">
//               <select name="options" class="form-aux" data-label="Options" tabindex="5">
//                 <option selected="selected" value="">Project Budget</option>
//                 <option value="">Less than $1000</option>
//                 <option value="">$1000 - $2000</option>
//                 <option value="">$2000 - $5000</option>
//                 <option value="">$5000 - $7000</option>
//                 <option value="">$10000 &amp; up</option>
//               </select>
//             </div>
//           </div>
//           <div class="column width-6">
//             <div class="form-select form-element large">

//             </div>
//           </div>
//           <div class="column width-6">
//             <input type="text" name="honeypot" class="form-honeypot form-element large">
//           </div>
//         </div>
//         <div class="row">
//           <div class="column width-12">
//             <div class="field-wrapper">
//               <textarea name="message" class="form-message form-element large" placeholder="Message*" tabindex="7" required></textarea>
//             </div>
//           </div>
//           <div class="column width-12">
//             <div class="field-wrapper pt-10 pb-10">
//                <input id="checkbox-1" class="form-element checkbox" name="checkbox-1" type="checkbox" required>
//               <label for="checkbox-1" class="checkbox-label">I want to receive your newsletter</label>
//             </div>
//           </div>
//           <div class="column width-12">
//             <input type="submit" value="Send Email" class="form-submit button medium bkg-theme bkg-hover-theme color-white color-hover-white">
//           </div>
//         </div>
//       </form>
//       <div class="form-response center"></div>
//     </div>
//   </div>
// </div>
// </section>