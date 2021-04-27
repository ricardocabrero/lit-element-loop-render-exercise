import { html, fixture, expect, assert } from '@open-wc/testing';
import '../src/bucle-render';

describe('bucle render component', () => {

  it('has propertie serie with 5 length', async () => {
    const el = await fixture(html`<bucle-render></bucle-render>`);
    expect(el.serie).to.have.lengthOf(5);
  });

  it('has propertie serie is type of Array', async () => {
    const el = await fixture(html`<bucle-render></bucle-render>`);
    assert.typeOf(el.serie, 'array');
  });

  it('has value "5" in serie propertie position 4', async () => {
    const el = await fixture(html`<bucle-render></bucle-render>`);
    expect(el.serie[4]).to.be.equal('5');
  });

  it('has 5 tag button in shadowRoot', async () => {
    const el = await fixture(html`<bucle-render></bucle-render>`);
    const btns = el.shadowRoot.querySelectorAll("button");
    expect(btns.length).to.be.equal(5);
  });

  it('text in 5th button is equal to last position in serie propertie', async () => {
    const el = await fixture(html`<bucle-render></bucle-render>`);
    const btn5 = el.shadowRoot.querySelectorAll("button")[4];
    expect(btn5.innerHTML).contains(el.serie[el.serie.length - 1]);
  });

});
