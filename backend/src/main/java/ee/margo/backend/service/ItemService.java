package ee.margo.backend.service;

import ee.margo.backend.model.Item;
import ee.margo.backend.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {

    @Autowired
    ItemRepository itemRepository;

    public List<Item> getItems(){
        return  itemRepository.findAll();
    }

    public void saveItem(Item item){
        itemRepository.save(item);
    }
}