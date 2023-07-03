/*
(c) 2023 Scot Watson  All Rights Reserved
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

"use strict";

const inpNumBytes = document.createElement("input");
inpNumBytes.value = 1;
document.body.appendChild(inpNumBytes);
const btnAllocate = document.createElement("button");
btnAllocate.innerHTML = "Allocate";
document.body.appendChild(btnAllocate);
let data;
btnAllocate.addEventListener("click", function () {
  inpNumBytes.value *= 2;
  try {
    data = new ArrayBuffer(inpNumBytes.value);
  } catch (e) {
    alert("error");
    console.error(e);
  }
});
