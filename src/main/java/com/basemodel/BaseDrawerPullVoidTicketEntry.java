
package com.basemodel;

import java.io.Serializable;

public abstract class BaseDrawerPullVoidTicketEntry implements Comparable, Serializable {

	public static String REF = "DrawerPullVoidTicketEntry"; //$NON-NLS-1$
	public static String PROP_AMOUNT = "amount"; //$NON-NLS-1$
	public static String PROP_HAST = "hast"; //$NON-NLS-1$
	public static String PROP_QUANTITY = "quantity"; //$NON-NLS-1$
	public static String PROP_CODE = "code"; //$NON-NLS-1$
	public static String PROP_REASON = "reason"; //$NON-NLS-1$

	public BaseDrawerPullVoidTicketEntry() {
		initialize();
	}

	protected void initialize() {
	}

	protected java.lang.Integer code;
	protected java.lang.String reason;
	protected java.lang.String hast;
	protected java.lang.Integer quantity;
	protected java.lang.Double amount;

	/**
	 * Return the value associated with the column: code
	 */
	public java.lang.Integer getCode() {
		return code == null ? Integer.valueOf(0) : code;
	}

	/**
	 * Set the value related to the column: code
	 * 
	 * @param code
	 *            the code value
	 */
	public void setCode(java.lang.Integer code) {
		this.code = code;
	}

	/**
	 * Return the value associated with the column: reason
	 */
	public java.lang.String getReason() {
		return reason;
	}

	/**
	 * Set the value related to the column: reason
	 * 
	 * @param reason
	 *            the reason value
	 */
	public void setReason(java.lang.String reason) {
		this.reason = reason;
	}

	/**
	 * Return the value associated with the column: hast
	 */
	public java.lang.String getHast() {
		return hast;
	}

	/**
	 * Set the value related to the column: hast
	 * 
	 * @param hast
	 *            the hast value
	 */
	public void setHast(java.lang.String hast) {
		this.hast = hast;
	}

	/**
	 * Return the value associated with the column: quantity
	 */
	public java.lang.Integer getQuantity() {
		return quantity == null ? Integer.valueOf(0) : quantity;
	}

	/**
	 * Set the value related to the column: quantity
	 * 
	 * @param quantity
	 *            the quantity value
	 */
	public void setQuantity(java.lang.Integer quantity) {
		this.quantity = quantity;
	}

	/**
	 * Return the value associated with the column: amount
	 */
	public java.lang.Double getAmount() {
		return amount == null ? Double.valueOf(0) : amount;
	}

	/**
	 * Set the value related to the column: amount
	 * 
	 * @param amount
	 *            the amount value
	 */
	public void setAmount(java.lang.Double amount) {
		this.amount = amount;
	}

	public int compareTo(Object obj) {
		if (obj.hashCode() > hashCode())
			return 1;
		else if (obj.hashCode() < hashCode())
			return -1;
		else
			return 0;
	}

	public String toString() {
		return super.toString();
	}

}