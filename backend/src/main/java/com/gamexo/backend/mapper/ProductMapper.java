package com.gamexo.backend.mapper;

import com.gamexo.backend.dto.product.ProductMappingDTO;
import com.gamexo.backend.dto.product.ProductRegistrationDTO;
import com.gamexo.backend.model.Product;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface ProductMapper {


    Product mapToProduct(ProductMappingDTO productMappingDTO, ProductRegistrationDTO productRegistrationDTO);

}
