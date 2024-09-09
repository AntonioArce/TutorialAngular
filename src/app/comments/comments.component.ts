import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>Comentarios de lo que sea</h3>
    <img src="https://media.npr.org/assets/img/2023/01/14/this-is-fine_custom-b7c50c845a78f5d7716475a92016d52655ba3115.jpg">
    <p>
    Lorem ipsum dolor sit amet consectetur adipiscing elit sem, sagittis ornare dictumst ridiculus massa cum montes magna viverra, justo ultricies parturient venenatis egestas arcu faucibus. Magnis pulvinar porta risus maecenas mus ullamcorper habitasse inceptos elementum, libero cras sociosqu
    iaculis lobortis mi dapibus ridiculus vel nascetur, non malesuada praesent hac sociis commodo netus placerat. Quisque semper montes pharetra justo enim consequat, gravida scelerisque tortor porttitor metus, tristique dignissim turpis torquent porta.
    </p>
  `,
  styles: `
    img{
      width: 100%;
      height: auto;
    }
  `
})
export class CommentsComponent {

}
