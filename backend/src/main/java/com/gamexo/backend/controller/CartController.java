package com.gamexo.backend.controller;


import com.gamexo.backend.service.CartService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cart/")
public class CartController {
    private final CartService cartService;

    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @GetMapping("{id}")
    public ResponseEntity<?> cart(@PathVariable Long id) {
        return ResponseEntity.ok(cartService.getCart(id));
    }

    @GetMapping("{id}/item/{itemCart}")
    public ResponseEntity<?> itemCart(@PathVariable Long id, @PathVariable Long itemCart) {
        System.out.println(itemCart);
        System.out.println(id);
        return ResponseEntity.ok(cartService.itemCart(id, itemCart));
    }
}
