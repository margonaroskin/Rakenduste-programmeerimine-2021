package ee.margo.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ItemController {

    @GetMapping("items")
    public String getItems() {
        return "Töötab";
    }

    @PostMapping("items")
    public String postItem(@RequestBody String string) {
        return "Ese edukalt lisatud " + string;
    }

    // tehke serverile restart
    // localhost:8080/items
}
