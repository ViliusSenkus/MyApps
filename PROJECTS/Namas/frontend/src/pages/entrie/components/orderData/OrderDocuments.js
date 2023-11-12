function OrderDocuments() {
  return (
    <>
      <div>
        <label className="entrie-form-label">Išankstinio apmokėjimo sąskaita faktūra:</label>
        <input type="text" className="entrie-form-input" name="order_offer_doc" />
      </div>
      <div>
        <label className="entrie-form-label">įsigyjimo dokumentas/čekis:</label>
        <input type="text" className="entrie-form-input" name="order_purchase_doc" />
      </div>
      <div>
        <label className="entrie-form-label">Avansinio mokėjimo dokumentas:</label>
        <input type="text" className="entrie-form-input" name="order_prepay_doc" />
      </div>
      <div>
        <label className="entrie-form-label">Galutinio mokėjimo dokumentas:</label>
        <input type="text" className="entrie-form-input" name="order_final_payment_doc" />
      </div>
      <div>
        <label className="entrie-form-label">Sąskaita faktūra</label>
        <input type="text" className="entrie-form-input" name="order_invoice" />
      </div>
      <div>
        <label className="entrie-form-label">Kiti dokumentai</label>
        <input type="text" className="entrie-form-input" name="order_other_docs" />
      </div>
    </>
  )
}

export default OrderDocuments;