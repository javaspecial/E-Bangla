package com.service;

import com.model.Tax;

public interface TaxService {
	public boolean save(Tax tax) throws Exception;

	public boolean saveOrUpdate(Tax tax) throws Exception;

	public boolean delete(Tax tax) throws Exception;
}
