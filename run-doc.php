#!/bin/bash
cd resources/documents/customer && apidoc -o ../../../public/documents/customer ;
cd .. && cd mobile && apidoc -o ../../../public/documents/mobile ;
